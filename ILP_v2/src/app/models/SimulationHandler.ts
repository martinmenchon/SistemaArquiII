import { Instruction } from "./Instruction";
import { ProcessorSettings } from "./ProcessorSettings";
import { Planner } from "./Planner";
import { Processor } from "./Processor";
import { GraphNode } from "./GraphNode";
import { Graph } from "./Graph";


export class SimulationHandler {

  private processor: Processor;
  private planner: Planner;

  constructor(instrucciones: Array<Instruction>, processorSettings: ProcessorSettings) {
    this.planner = new Planner(instrucciones);

    this.processor = new Processor(instrucciones, processorSettings.degree, this.planner);
    this.processor.addFU(processorSettings.numFUArithmetic,
      processorSettings.numFUMemory,
      processorSettings.numFUMultifunction);
  }

  public nextCycle(): void {
    this.processor.nextCycle();
  }

  public getCycle(): number {
    return this.processor.getCycleCounter();
  }

  public getPS(): string {
    let PS: Array<GraphNode> = this.planner.getPS();
    let out: string = "";

    for (let i = 0; i < PS.length; i++) {
      if (i != (PS.length - 1)) {
        out += PS[i].getInstruction().getIdString() + ",";
      } else {
        out += PS[i].getInstruction().getIdString();
      }
    }

    return out;
  }

  public getSelectedInstructions(): string {
    let selectedInstructions: Array<GraphNode> = this.planner.getSelectedInstructions();
    let out: string = "";

    for (let i = 0; i < selectedInstructions.length; i++) {
      if (i != (selectedInstructions.length - 1)) {
        out += selectedInstructions[i].getInstruction().getIdString() + ",";
      } else {
        out += selectedInstructions[i].getInstruction().getIdString();
      }
    }

    return out;
  }

  public getGraph(): Graph {
    return this.planner.getGraph();
  }
  
}
