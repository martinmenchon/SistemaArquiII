import { Instruction } from './Instruction';

export class Dispatch {
    instruction = new Array<Instruction>();
    private grade=0;

    constructor(grade){
        this.grade=grade;
    }

    public getSize(){
        return this.instruction.length;
    }

    public isBusy(){
        if (this.instruction.length == this.grade)
            return true 
        else
            return false;
    }

    public addInstruction(i:Instruction){
        this.instruction.push(i);
    }

    getInstruction(){
        return this.instruction.shift();
    }
    getGrade(){
        return this.grade;
    }
}