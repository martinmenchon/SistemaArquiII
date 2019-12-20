import { Instruction } from './Instruction';

export class Dispatch {
    instruction = new Array<Instruction>();
    private grade = 0;

    constructor(grade) {
        this.grade = grade;
    }

    public getSize() {
        return this.instruction.length;
    }

    public isBusy() {
        if (this.instruction.length == this.grade)
            return true
        else
            return false;
    }

    public addInstruction(i: Instruction) {
        this.instruction.push(i);
    }

    getInstruction() {
        return this.instruction.shift();
    }
    getGrade() {
        return this.grade;
    }

    public remove(inst: Instruction) {
        var i = this.instruction.indexOf(inst);
        this.instruction.splice(i, 1);
    }

    public hasDependenceD(inst: Instruction) {
        for (let i = 0; i < this.instruction.length ; i++) {
            if (this.instruction[i] != null) {
                if (this.instruction[i].existDependency(inst))
                    return true;
            }
        }
        return false;
    }
}