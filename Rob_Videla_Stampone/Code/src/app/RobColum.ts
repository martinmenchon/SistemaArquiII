import { Instruction } from './Instruction';

export class RobColum{
    private inst: Instruction;//O LISTA DE STRING?
    private inst2: Instruction;
    private busy: boolean;

    constructor(){
        this.inst = null;
        this.inst2 = null;
        this.busy = false;
    }

    public addInstruction(inst:Instruction ){
        this.inst = inst;
    }

    public addInstruction2(inst:Instruction){
        this.inst2= inst;
    }
    public setInstruction(){
        this.inst=null;
    }

    public setInstruction2(){
        this.inst2=null;
    }

    public getInstruction(){
        return this.inst;
    }

    public getInstruction2(){
        return this.inst2;
    }

}