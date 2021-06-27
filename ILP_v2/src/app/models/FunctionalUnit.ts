import {Instruction} from '../models/Instruction';
import { FUType, InstStatus } from './Enums';


export class FunctionalUnit {

  private type: FUType;
  private busy: boolean;
  private countdown: number;
  private instruction: Instruction;

  constructor(type: FUType) {
    this.type = type;
    this.busy = false;
    this.countdown = 0;
    this.instruction = null;
  }

  public getType(): FUType {
    return this.type;
  }

  public setType(type: FUType) {
    this.type = type;
  }

  public updateTimer() {
    if (this.countdown > 0) {
      this.countdown--;
    }

    if (this.countdown === 0) {
      this.instruction.setStatus(InstStatus.DONE);
      this.busy = false;
      this.instruction = null;
    }
  }

  public isBusy(): boolean {
    return this.busy;
  }

  public isFinish(): boolean {
    return this.countdown === 0;
  }

  public getInstruction() {
    return this.instruction;
  }

  public removeInstruction() {
    this.instruction = null;
    this.busy = false;
    this.countdown = 0;
  }

  public addInstruction(i: Instruction) {
    this.instruction = i;
    this.countdown = this.instruction.getCycles();
    this.busy = true;
  }

}
