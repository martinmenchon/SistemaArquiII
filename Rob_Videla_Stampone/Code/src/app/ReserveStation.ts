import { Instruction } from './Instruction';

export class ReserveStation{
    instructions = new Array<Instruction>();
    private numReserveStation: number;

    constructor(numReserveStation){
        this.numReserveStation=numReserveStation;
    }

    
    public isBusy(){
        if (this.instructions.length == this.numReserveStation)
            return true 
        else
            return false;
    }

    public addInstruction(i:Instruction){
        this.instructions.push(i);
    }

    public getInstruction(){
        return this.instructions.shift();
    }

    public getnumReserveStation(): number {
        return this.numReserveStation;
    }
    public setnumReserveStation(value: number) {
        this.numReserveStation = value;
    }

    public removeInstruction(i:number){
        this.instructions.splice(i,1);
    }
}