import { FunctionalUnit } from './FunctionalUnit';
import { Instruction } from './Instruction';
import { Planner } from "./Planner";
import { GraphNode } from "./GraphNode";
import { FUType } from './Enums';

export class Processor {

  private fus: Array<FunctionalUnit>;
  private cycleCounter: number = 0;
  private instructions: Array<Instruction>;
  private planner: Planner;
  private degree: number;

  constructor(instrucciones: Array<Instruction>, degree: number, planner: Planner) {
    this.instructions = instrucciones.slice(0);
    this.fus = new Array<FunctionalUnit>();
    this.planner = planner;
    this.degree = degree;
  }

  public addFU(numArithmetic: number, numMemory: number, numMultifunction: number) {
    for (let i = 0; i < numMultifunction; i++) {
      this.fus.push(new FunctionalUnit(FUType.MULTIFUNCTION));
    }
    for (let i = 0; i < numArithmetic; i++) {
      this.fus.push(new FunctionalUnit(FUType.ARITHMETIC));
    }
    for (let i = 0; i < numMemory; i++) {
      this.fus.push(new FunctionalUnit(FUType.MEMORY));
    }
  }

  public getCycleCounter(): number {
    return this.cycleCounter;
  }

  public getFUs(): Array<FunctionalUnit> {
    return this.fus;
  }

  public nextCycle(): void {
    this.updateFUs();

    let instructionsSelected: Array<GraphNode> = this.planner.getInstructionsSelected(this.cycleCounter, this.degree, this.getFreeFUs());

    instructionsSelected.forEach((instr) => {
      let posFU: number = this.getFreeFUIndex(instr.getInstruction());
      this.fus[posFU].addInstruction(instr.getInstruction());
    });

    this.cycleCounter += 1;
  }

  private getFreeFUs(): Array<FunctionalUnit> {
    let out: Array<FunctionalUnit> = new Array<FunctionalUnit>();

    this.fus.forEach(fu => {
      if(!fu.isBusy())
        out.push(fu);
    });

    return out;
  }

  private getFreeFUIndex(inst: Instruction):number {
    for (let i = 0; i < this.fus.length; i++) {
      if (!this.fus[i].isBusy() && this.fus[i].getType() === inst.getFUType()) {
        return i;
      } else if ((!this.fus[i].isBusy() && this.fus[i].getType() === FUType.MULTIFUNCTION)) {
        return i;
      }
    }
    return -1;
  }

  private updateFUs() {
    for (let i = 0; i < this.fus.length; i++) {
      if (this.fus[i].isBusy()) {
        this.fus[i].updateTimer();
      }
    }
  }


}
