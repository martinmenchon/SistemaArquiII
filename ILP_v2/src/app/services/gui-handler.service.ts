import { GraphNode } from './../models/GraphNode';
import { Graph } from './../models/Graph';
import { Diagram } from 'gojs';
import * as go from 'gojs';
import { SimulationStep } from './../models/SimulationStep';
import { ProcessorSettings } from '../models/ProcessorSettings';
import { Instruction } from 'src/app/models/Instruction';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Processor } from '../models/Processor';
import { SimulationHandler } from "../models/SimulationHandler";
import { FUType, InstType } from '../models/Enums';

@Injectable({
  providedIn: 'root'
})
export class GuiHandlerService {

  private _instructions: Array<Instruction> = new Array<Instruction>();

  private _instructionsSubjectQueue: BehaviorSubject<Instruction[]>
    = new BehaviorSubject<Instruction[]>(this._instructions);

  private _simulationSteps: Array<SimulationStep> = new Array<SimulationStep>();

  private _simulationStepsSubjectQueue: BehaviorSubject<Array<SimulationStep>>
    = new BehaviorSubject<Array<SimulationStep>>(this._simulationSteps);


  private _processorSettings: ProcessorSettings = new ProcessorSettings();
  private _processorSettingsSubjectQueue: BehaviorSubject<ProcessorSettings>
    = new BehaviorSubject<ProcessorSettings>(this._processorSettings);

  private _simulatorHandler: SimulationHandler;

  private _simulationOn: boolean = false;
  private _simulationOnSubjectQueue: BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(this._simulationOn);


  private _isFinish: boolean = false;
  private _isFinishSubjectQueue: BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(this._isFinish);

  private _editing: boolean = true;
  private _editingSubjectQueue: BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(this._editing);

  private _executing: boolean = false;
  private _executingSubjectQueue: BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(this._executing);


  private _requestPS: boolean; // PS == ProcessorSettings
  private _requestPSSubjectQueue: BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(this._requestPS);



  constructor() {
    // this.initDebugExaple();
  }

  private initDebugExaple() {
    this._instructions.push(new Instruction(1, InstType.LD, FUType.MEMORY, 1, 0));
    this._instructions.push(new Instruction(2, InstType.LD, FUType.MEMORY, 2, 0));
    this._instructions.push(new Instruction(3, InstType.LD, FUType.MEMORY, 3, 0));
    this._instructionsSubjectQueue.next(this._instructions);

    this._processorSettings.degree = 3;
    this._processorSettings.numFUMemory = 2;
    this._processorSettingsSubjectQueue.next(this._processorSettings);

  }

  private initExample1() {
    this._instructions.push(new Instruction(1, InstType.LD, FUType.MEMORY, 1, 6));
    this._instructions.push(new Instruction(2, InstType.LD, FUType.MEMORY, 2, 6));
    this._instructions.push(new Instruction(3, InstType.ADD, FUType.ARITHMETIC, 3, 1, 2));
    this._instructions.push(new Instruction(4, InstType.LD, FUType.MEMORY, 4, 6));
    this._instructions.push(new Instruction(5, InstType.LD, FUType.MEMORY, 5, 6));
    this._instructions.push(new Instruction(6, InstType.DIV, FUType.ARITHMETIC, 6, 4, 5));
    this._instructions.push(new Instruction(7, InstType.ADD, FUType.ARITHMETIC, 7, 3, 6));
  }

  private initExample2() {
    this._instructions.push(new Instruction(1, InstType.LD, FUType.MEMORY, 1, 10));
    this._instructions.push(new Instruction(2, InstType.LD, FUType.MEMORY, 2, 11));
    this._instructions.push(new Instruction(3, InstType.MUL, FUType.ARITHMETIC, 3, 1, 2));
    this._instructions.push(new Instruction(4, InstType.ST, FUType.MEMORY, 12, 3));
    this._instructions.push(new Instruction(5, InstType.LD, FUType.MEMORY, 4, 13));
    this._instructions.push(new Instruction(6, InstType.LD, FUType.MEMORY, 5, 14));
    this._instructions.push(new Instruction(7, InstType.DIV, FUType.ARITHMETIC, 6, 5, 4));
    this._instructions.push(new Instruction(8, InstType.SUB, FUType.ARITHMETIC, 7, 3, 6));
    this._instructions.push(new Instruction(9, InstType.ST, FUType.MEMORY, 15, 7));
  }

  private initExample3() {
    this._instructions.push(new Instruction(1, InstType.LD, FUType.MEMORY, 1, 10));
    this._instructions.push(new Instruction(2, InstType.LD, FUType.MEMORY, 2, 11));
    this._instructions.push(new Instruction(3, InstType.LD, FUType.MEMORY, 3, 12));
    this._instructions.push(new Instruction(4, InstType.LD, FUType.MEMORY, 4, 13));
    this._instructions.push(new Instruction(5, InstType.ADD, FUType.ARITHMETIC, 5, 1, 2));
    this._instructions.push(new Instruction(6, InstType.MUL, FUType.ARITHMETIC, 6, 1, 5));
    this._instructions.push(new Instruction(7, InstType.SUB, FUType.ARITHMETIC, 7, 3, 4));
    this._instructions.push(new Instruction(8, InstType.ADD, FUType.ARITHMETIC, 8, 6, 7));
    this._instructions.push(new Instruction(9, InstType.ST, FUType.MEMORY, 14, 8));
  }


  public loadExample1() {
    this._instructions = new Array<Instruction>();
    this.initExample1();
    this._instructionsSubjectQueue.next(this._instructions);
  }

  public loadExample2() {
    this._instructions = new Array<Instruction>();
    this.initExample2();
    this._instructionsSubjectQueue.next(this._instructions);
  }

  public loadExample3() {
    this._instructions = new Array<Instruction>();
    this.initExample3();
    this._instructionsSubjectQueue.next(this._instructions);
  }

  addInstruction(inst: Instruction) {
    inst.setId(this._instructions.length + 1);
    this.updateInstructionCycle(inst);
    this._instructions.push(inst);
    this._instructionsSubjectQueue.next(this._instructions);
  }

  deleteInstruction(inst: Instruction) {
    const index = this._instructions.indexOf(inst);
    if (index !== -1) {
      this._instructions.splice(index, 1);
      this.recalculateID();
      this._instructionsSubjectQueue.next(this._instructions);
    }
  }

  clearInstructions() {
    this._instructions = new Array<Instruction>();
    this._instructionsSubjectQueue.next(this._instructions);
  }

  private addSimulationStep(step: SimulationStep) {
    this._simulationSteps.push(step);
    this._simulationStepsSubjectQueue.next(this._simulationSteps);
  }

  private recalculateID() {
    for (let i: number = 0; i < this._instructions.length; i++) {
      this._instructions[i].setId(i + 1);
    }
  }

  public get processorSettings(): ProcessorSettings {
    return this._processorSettings;
  }

  public set processorSettings(value: ProcessorSettings) {
    this._processorSettings = value;
    this._processorSettingsSubjectQueue.next(this._processorSettings);
    this.updateAllInstructionsCycles();
  }

  private updateAllInstructionsCycles() {
    this._instructions.forEach((instruction) => {
      this.updateInstructionCycle(instruction);
    });
  }

  private updateInstructionCycle(instruction: Instruction) {
    switch (instruction.getType()) {
      case InstType.ADD:
        instruction.setCycles(this._processorSettings.latencyADD);
        break;

      case InstType.SUB:
        instruction.setCycles(this._processorSettings.latencySUB);
        break;

      case InstType.MUL:
        instruction.setCycles(this._processorSettings.latencyMUL);
        break;

      case InstType.DIV:
        instruction.setCycles(this._processorSettings.latencyDIV);
        break;

      case InstType.LD:
        instruction.setCycles(this._processorSettings.latencyLD);
        break;

      case InstType.ST:
        instruction.setCycles(this._processorSettings.latencyST);
        break;
    }
  }

  public saveCPUConfiguration(processorSettings: ProcessorSettings) {
    this._editing = false;
    this._executing = true;
    this._editingSubjectQueue.next(this._editing);
    this._executingSubjectQueue.next(this._executing);
    this.processorSettings = processorSettings;
    this._simulationOn = false;
    this._simulationOnSubjectQueue.next(this._simulationOn);

  }

  public nextCycleSimulation() {
    this.drawDiagram(this._simulatorHandler.getGraph());

    if (!this._isFinish) {
      this._simulatorHandler.nextCycle();
      let cycle: number = this._simulatorHandler.getCycle();
      let ps: string = this._simulatorHandler.getPS();
      let selectedInstructions: string = this._simulatorHandler.getSelectedInstructions();
      this.addSimulationStep(new SimulationStep(cycle, ps, selectedInstructions));
    }

    if (this._simulatorHandler.getGraph().isEmpty()) {
      this._isFinish = true;
      this._isFinishSubjectQueue.next(this._isFinish);
    }
  }

  public executeILP() {
    this.startSimulation()
  }

  public startSimulation() {
    // Create a new instance of the simulation 
    this._simulatorHandler = new SimulationHandler(this._instructions, this._processorSettings);

    // Reset the rows in the simulation table
    this._simulationSteps = new Array<SimulationStep>();
    this._simulationStepsSubjectQueue.next(this._simulationSteps);

    this._simulationOn = true;
    this._simulationOnSubjectQueue.next(this._simulationOn);

    this._isFinish = false;
    this._isFinishSubjectQueue.next(this._isFinish);

    // * The graph is generated and drawn when the graph-view component is init 

  }

  public endSimulation() {
    this._simulatorHandler = null;

    this._simulationOn = false;
    this._simulationOnSubjectQueue.next(this._simulationOn);

    this._isFinish = false;
    this._isFinishSubjectQueue.next(this._isFinish);
  }

  public restartSimulation() {
    this.endSimulation();
    this.startSimulation();

    // The graph is reseted using the one that is generated in the new simulation handler instance 
    this.drawDiagram(this._simulatorHandler.getGraph());
  }

  public get planificatedOrder(): string {
    let out: string = "";

    this._simulationSteps.forEach(row => {
      if (row.chosenSetString !== "")
        out = out.concat(row.chosenSetString).concat(",");
    });

    return out;
  }

  public get editing(): boolean {
    return this._editing;
  }

  public set editing(editing: boolean) {
    this._editing = editing;
    this._editingSubjectQueue.next(this._editing);
    if (this.editing == false) { // Save button was pressed
      this._requestPSSubjectQueue.next(this._requestPS);
    } else { // Edit button was pressed
      this.endSimulation();
    }
  }


  // ~~~~~~~~~~~~~~~~~~~~ obsevable getters ~~~~~~~~~~~~~~~~~~~~

  public get observableEditing(): Observable<boolean> {
    return this._editingSubjectQueue.asObservable();
  }

  public get observableExecuting(): Observable<boolean> {
    return this._executingSubjectQueue.asObservable();
  }

  public get observableSimulationOn(): Observable<boolean> {
    return this._simulationOnSubjectQueue.asObservable();
  }

  public get observableProcessorSettings(): Observable<ProcessorSettings> {
    return this._processorSettingsSubjectQueue.asObservable();
  }

  public get observableSimulationSteps(): Observable<SimulationStep[]> {
    return this._simulationStepsSubjectQueue.asObservable();
  }

  public get observableRequestPS(): Observable<boolean> {
    return this._requestPSSubjectQueue.asObservable();
  }


  // ~~~~~~~~~~~~~~~~~~~~~~~~~ DIAGRAM ~~~~~~~~~~~~~~~~~~~~~~~~~

  private _diagram: Diagram;
  private _diagramSubjectQueue: BehaviorSubject<Diagram> =
    new BehaviorSubject<Diagram>(this._diagram);


  private nodeDataArray: Array<Object>;
  private linkDataArray: Array<Object>;

  public get observableDiagram(): Observable<Diagram> {
    return this._diagramSubjectQueue.asObservable();
  }

  public get observableInstructions(): Observable<Instruction[]> {
    return this._instructionsSubjectQueue.asObservable();
  }

  public get observableIsFinish(): Observable<boolean> {
    return this._isFinishSubjectQueue.asObservable();
  }

  public get diagram(): Diagram {
    return this._diagram;
  }
  
  public set diagram(diagram: Diagram) {
    this._diagram = diagram;
    this._diagramSubjectQueue.next(this.diagram);
    this.initDiagram();
    if (this._simulationOn) {
      this.drawDiagram(this._simulatorHandler.getGraph());
    }
  }

  private initDiagram() {

    let $ = go.GraphObject.make;
    this._diagram.linkTemplate =
      $(go.Link,  // the whole link panel
        $(go.Shape,  // the link shape
          { stroke: "black" }),
        $(go.Shape,  // the arrowhead
          { toArrow: "standard", stroke: null }),
        $(go.Panel, "Auto",
          $(go.Shape,  // the label background, which becomes transparent around the edges
            {
              fill: $(go.Brush, "Radial", { 0: "rgb(240, 240, 240)", 0.3: "rgb(240, 240, 240)", 1: "rgba(240, 240, 240, 0)" }),
              stroke: null
            }),
          $(go.TextBlock,  // the label text
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "#555555",
              margin: 4
            },
            new go.Binding("text", "text"))
        )
      );

    this._diagram.nodeTemplate =
      $(go.Node, "Auto",  // the Shape automatically fits around the TextBlock

        new go.Binding("location", "loc", go.Point.parse),
        $(go.Shape, "RoundedRectangle",  // use this kind of figure for the Shape
          // bind Shape.fill to Node.data.color
          { fill: $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }), stroke: "black" },
          new go.Binding("fill", "color"),
        ),

        $(go.TextBlock,
          { margin: 3, textAlign: "center" },  // some room around the text
          // bind TextBlock.text to Node.data.key
          new go.Binding("text", "text"))
      );


    this.nodeDataArray = []
    this.linkDataArray = [];

    this._diagram.model = new go.GraphLinksModel(this.nodeDataArray, this.linkDataArray);

  }


  public drawDiagram(graph: Graph): void {
    this.nodeDataArray = [];
    this.linkDataArray = [];

    let rootNodes: GraphNode[] = graph.getRootNodes();
    let nodes: GraphNode[] = graph.getAllNodes();
    nodes.forEach(node => {
      let text: string = "";
      if (node.getET() !== -1 && !rootNodes.includes(node))
        text = node.getInstruction().getIdString() + "\n ET: " + node.getET();
      else
        text = node.getInstruction().getIdString();

      if (node.isCritical())
        this.nodeDataArray.push(
          {
            key: node.getInstruction().getId(),
            text: text,
            color: "lightblue"
          });
      else
        this.nodeDataArray.push(
          {
            key: node.getInstruction().getId(),
            text: text,
            loc: "0 0"
          });

      let dependencies: GraphNode[] = node.getDependencies();
      dependencies.forEach(nodeDep => {

        this.linkDataArray.push(
          {
            from: node.getInstruction().getId(),
            to: nodeDep.getInstruction().getId(),
            text: "(" + node.getInstLatency() + "," + node.getAcummLatency() + ")"
          });

      });

    });

    this._diagram.model = new go.GraphLinksModel(this.nodeDataArray, this.linkDataArray);
    let layout = new go.LayeredDigraphLayout();
    this._diagram.layout = layout;
    layout.direction = 90;
    layout.layerSpacing = 40;
    layout.columnSpacing = 30;
    layout.initializeOption = go.LayeredDigraphLayout.InitDepthFirstOut
    layout.layeringOption = go.LayeredDigraphLayout.LayerLongestPathSink


    this._diagramSubjectQueue.next(this._diagram);
  }


}
