import { Instruction } from './Instruction';

export class FunctionalUnit{
    private instruction:Instruction;
    private type:String;
    private busy:boolean;

    constructor(type: String){
        this.type = type;
        this.busy=false;
        this.instruction=null;
    }

    public isBusy(){
        return this.busy;
    }

    public getType(){
        return this.type;
    }

    public addInstruction(i:Instruction){
        this.instruction = i;
    }
    public getInstruction(){
        return this.instruction;
    }

    public setBusy(busy:boolean){
        this.busy=busy;  
    }

    public removeInstruction(){
        this.instruction=null;
    }
}