import { Instruction } from './Instruction';
import { RobColum } from './RobColum';

export class BufferReorder{

    instruction = new Array<Instruction>();
    private size:number;
    private numGrade: number;
    private robC = new Array<RobColum>();
    private listInstructionOriginal:Array<Instruction>;

    constructor(size,numGrade,listInstruction:  Array<Instruction> ){
        this.size= size;
        this.numGrade = numGrade;
        this.listInstructionOriginal = listInstruction.slice(0);
        for(let i = 0; i < size; i++)
            this.robC.push(new RobColum);
    }

    public addInstruction (inst:Instruction){
        let cut = false;
        for (let i = 0; i < this.robC.length && !cut; i++) {
            if (this.robC[i].getInstruction() == null){
                this.robC[i].addInstruction(inst);
                cut = true;
            }
        }
    }

    public isBusy(){
        for(let i = 0; i< this.robC.length; i++)
            if (this.robC[i].getInstruction() == null)
                return false
        return true;
    }
  
    public getSize(){
        return this.size;
    }

    public getRobC(){
        return this.robC;
    }

    public removeInstCompletes(){
        let i = 0;
        let count = 0
        while (i<this.size && count < this.numGrade){
            if (this.robC[i].getInstruction()!= null )
                if (this.robC[i].getInstruction().getStatus() == "F" && this.listInstructionOriginal[0].getId() == this.robC[i].getInstruction().getId())
                {  
                    if(this.robC[i].getInstruction2() == null){ 
                        this.robC[i].setInstruction();
                        i=-1;
                    }
                    else{
                        this.robC[i].addInstruction(this.robC[i].getInstruction2())
                        this.robC[i].setInstruction2();
                    }               
                    this.listInstructionOriginal.shift();
                    count++;
                }
            i++;
        }
    }

    public getListInstructions(){
        return this.listInstructionOriginal.slice(0);
    }

    public hasInstructionCompleted(listAux) {
        let i = 0;
        while (i<this.size){
            if (this.robC[i].getInstruction()!= null )
                if (this.robC[i].getInstruction().getStatus() == "F" && listAux[0].getId() == this.robC[i].getInstruction().getId())
                        return i;
            i++;
                    
        }
        return -1;
    }

    public isComplete() {
        if (this.listInstructionOriginal.length == 0)
            return true;
        return false;
    }

}

