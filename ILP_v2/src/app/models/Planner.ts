import { Instruction } from './Instruction';
import { Graph } from './Graph';
import { GraphNode } from './GraphNode';
import { FunctionalUnit } from './FunctionalUnit';
import { InstType, FUType } from './Enums';

export class Planner {

  private instructions: Array<Instruction>;
  private graph: Graph;
  private PS: Array<GraphNode>; // Planificated Set
  private instructionsSelected: Array<GraphNode>;

  constructor(instructions: Array<Instruction>) {
    this.instructions = instructions;
    this.buildDependencies();
    this.graph = new Graph();
    this.buildGraph();
  }


  public getInstructionsSelected(cycle: number, degree: number, freeFUs: Array<FunctionalUnit>): Array<GraphNode> {

    this.buildPS(freeFUs, cycle);
    this.updateInstructionsSelected(degree, freeFUs);
    this.updateGraph(cycle);

    return this.instructionsSelected;
  }

  public getPS(): Array<GraphNode> {
    return this.PS;
  }

  public getSelectedInstructions(): Array<GraphNode> {
    return this.instructionsSelected;
  }

  public getGraph(): Graph {
    return this.graph;
  }

  public printDependencies(): void {
    // @ts-ignore
    for (const instruction: Instruction of this.instructions) {
      console.log('Instruction: ' + instruction.getId());
      console.log('Deps: ' + instruction.getDependencies());
      console.log('\n');
    }
  }

  private buildGraph() {
    for (let i = 0; i < this.instructions.length; i++) {
      const node: GraphNode = new GraphNode(this.instructions[i]);
      this.graph.addNode(this.instructions[i].getId(), node);
    }

    this.graph.buildDependencies();
    this.graph.initAllAcummLatencies();
    this.graph.buildCriticalPath();
    this.setETRootNodes();
  }

  private buildDependencies() {
    let found = false;
    for (let i = 0; i < this.instructions.length - 1; i++) {
      const currentInstruction: Instruction = this.instructions[i];
      {
        {
          if (currentInstruction.getType() !== InstType.ST) {
            for (let j = i + 1; j < this.instructions.length && !found; j++) {
              const otherInstruction: Instruction = this.instructions[j];

              if (otherInstruction.getType() !== InstType.ST) {
                if (otherInstruction.getType() === InstType.LD) {

                  if (otherInstruction.getOP1() === currentInstruction.getDestination()
                    || currentInstruction.getDestination() === otherInstruction.getOP2()) {
                    currentInstruction.addDependency(otherInstruction.getId());
                  }
                }
                if (otherInstruction.getOP1() === currentInstruction.getDestination()
                  || currentInstruction.getDestination() === otherInstruction.getOP2()) {
                  currentInstruction.addDependency(otherInstruction.getId());
                }
                if (currentInstruction.getDestination() === otherInstruction.getDestination()) {
                  found = true;
                }
              } else {

                if (otherInstruction.getDestination() === currentInstruction.getDestination()
                  || currentInstruction.getDestination() === otherInstruction.getOP1()) {
                  currentInstruction.addDependency(otherInstruction.getId());
                }

              }
            }
          }
        }
      }
      found = false;
    }
  }

  private setETRootNodes() {
    let rootNodes: GraphNode[] = this.graph.getRootNodes();
    for (let i = 0; i < rootNodes.length; i++) {
      rootNodes[i].setET(0);
    }
  }

  private getFUIndex(inst: Instruction, fu: Array<FunctionalUnit>): number {
    for (let i = 0; i < fu.length; i++) {
      if (fu[i].getType() === inst.getFUType() || fu[i].getType() === FUType.MULTIFUNCTION) {
        return i;
      }
      return -1;
    }
  }

  private aux(arr: Array<GraphNode>): string {
    let out = '\n';
    arr.forEach(node => {
      out = out.concat(node.toString(), '\n');
    });

    return out;
  }

  private buildPS(fus: Array<FunctionalUnit>, cycle: number) {


    this.PS = this.graph.getNodesByET(cycle);

    //Elimino instrucciones que no pueden ser ejecutadas por falta de unidad funcional o dependecia
    let i: number = 0;
    while (i < this.PS.length) {
      if (this.getFUIndex(this.PS[i].getInstruction(), fus) == -1) {
        // Eliminar por falta de FU
        this.PS.splice(i, 1);
      } else if (this.graph.hasDependencies(this.PS[i])) {
        // Eliminar por dep
        this.PS.splice(i, 1);
      } else {
        i++;
      }
    }

    //Ordeno el conjunto de planificable segun nodos criticos y cant  de dependenicias
    this.PS.sort(function (a, b) {
      if (a.isCritical() !== b.isCritical())
        if (a.isCritical())
          return -1; // a es critico y b no
        else
          return 1; // b es critico y b no

      else { // ambos pertenecen a la misma categoria, aca va el segundo criterio de ordenamiento

        // tiene mayor precedencia el que mas dependencias tenga 
        return b.getDependencies().length - a.getDependencies().length;
      }
    });

  }

  private updateInstructionsSelected(degree: number, freeFUs: Array<FunctionalUnit>) {
    
    let selected: Array<GraphNode> = new Array<GraphNode>();
    let memFUcount: number = 0;
    let aritFUcount: number = 0;
    let multFUcount: number = 0;

    freeFUs.forEach(fu => {
      if (fu.getType() === FUType.MEMORY)
        memFUcount++;

      if (fu.getType() === FUType.ARITHMETIC)
        aritFUcount++;

      if (fu.getType() === FUType.MULTIFUNCTION)
        multFUcount++;
    });

    this.PS.forEach((node) => {
      if (selected.length < degree) {

        if (node.getInstruction().getFUType() === FUType.MEMORY) {
          if (memFUcount > 0) {
            memFUcount--;
            selected.push(node);
          } else if (multFUcount > 0) {
            multFUcount--;
            selected.push(node);
          }
        }

        if (node.getInstruction().getFUType() === FUType.ARITHMETIC) {
          if (aritFUcount > 0) {
            aritFUcount--;
            selected.push(node);
          } else if (multFUcount > 0) {
            multFUcount--;
            selected.push(node);
          }
        }

      }
    });

    this.instructionsSelected = selected;
  }

  private updateGraph(cycle: number) {

    //eliminación en el grafo los nodos elejidos
    this.instructionsSelected.forEach((node) => {
      node.getDependencies().forEach((nodeDep) => {
        this.graph.setETNode(nodeDep.getId(), node.getInstLatency() + cycle);
      });

      this.graph.deleteNode(node.getId());
    });
  }




}
