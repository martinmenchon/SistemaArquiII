import { Instruction } from './Instruction';

export class GraphNode {

  private id: number;
  private instruction: Instruction;
  private instLatency: number;
  private accumLatency: number;
  private listDependencies: GraphNode[];
  private isCriticalNode: boolean;
  private ET: number;

  constructor(instruction: Instruction) {
    this.id = instruction.getId();
    this.instruction = instruction;
    this.instLatency = this.instruction.getCycles();
    this.accumLatency = 0;
    this.isCriticalNode = false;
    this.listDependencies = [];
    this.ET = -1;
  }

  public addDependence(node: GraphNode) {
    this.listDependencies.push(node);
  }

  public getInstruction() {
    return this.instruction;
  }

  public setAcummLatency(accumLatency: number) {
    this.accumLatency = accumLatency;
  }

  public setCriticalNode(isCritical: boolean) {
    this.isCriticalNode = isCritical;
  }

  public isCritical(): boolean {
    return this.isCriticalNode;
  }

  public getInstLatency(): number {
    return this.instLatency;
  }

  public isFinished(): boolean {
    return this.listDependencies.length == 0;
  }

  public getAcummLatency(): number {
    return this.accumLatency;
  }

  public getDependeciesString(): string {
    return this.listDependencies.toString();
  }

  public getDependencies(): GraphNode[] {
    return this.listDependencies;
  }

  public setET(ET: number) {
    this.ET = ET;
  }

  public getET() {
    return this.ET;
  }

  public getId() {
    return this.id;
  }

  public equals(otherNode: GraphNode) {
    return this.id === otherNode.getId();
  }

  public toString(): string {
    let out:string = '';

    out = out.concat('id: ', this.id.toString(),' C: ',this.isCriticalNode.toString(), ' dep: ',this.listDependencies.length.toString());
    
    return out;
  }
  
}
