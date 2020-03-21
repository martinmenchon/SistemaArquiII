import { Dispatch } from './Dispatch';
import { Instruction } from './Instruction';
import { FunctionalUnit } from './FunctionalUnit';
import { ReserveStation } from './ReserveStation';
import { BufferReorder } from './BufferReorder';



export class Processor{
    private dispatcher:Dispatch
    private uf: Array<FunctionalUnit>;
    private er: ReserveStation;
    private rob: BufferReorder;
    private cycleCounter = -1;
    private listInstruction: Array<Instruction>;
    
    constructor(instrucciones:Array<Instruction>,numOrden,numReserveStation,robSize){
        this.listInstruction = instrucciones.slice(0);
        this.setDependenciasRAW();
        this.dispatcher = new Dispatch(numOrden);
        this.er = new ReserveStation(numReserveStation);
        this.uf=new Array<FunctionalUnit>();
        this.rob = new BufferReorder(robSize,numOrden,instrucciones);
    }

    public addUF(numArithmetic,numMemory,numMultifunction){
        for( let i=0; i<numMultifunction; i++)
            this.uf.push(new FunctionalUnit("MULTIFUNCT"));
        for( let i=0; i<numArithmetic; i++)
            this.uf.push(new FunctionalUnit("ARITH"));
        for( let i=0; i<numMemory; i++)
            this.uf.push(new FunctionalUnit("MEM"));
    }

    public setDependenciasRAW(){
        let encontro = false;
        for (let i = 0; i < this.listInstruction.length -1; i++) {
          if(this.listInstruction[i].getType()!="ST")
            for (let j = i+1; j < this.listInstruction.length && !encontro; j++) {
              if(this.listInstruction[j].getType()!="ST"){
                if(this.listInstruction[j].getType()=="LD") 
                  if (this.listInstruction[j].getOp1().substring(1,this.listInstruction[j].getOp1().length-1) == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination() == this.listInstruction[j].getOp2() )  
                    this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                  if (this.listInstruction[j].getOp1() == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination() == this.listInstruction[j].getOp2() )  
                      this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                  if(this.listInstruction[i].getDestination() == this.listInstruction[j].getDestination()){
                    encontro=true;
                  }
              }
              else{
                if(this.listInstruction[j].getDestination().substring(1,this.listInstruction[j].getDestination().length-1) == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination()==this.listInstruction[j].getOp1())            
                  this.listInstruction[i].addDependency(this.listInstruction[j].getId());             
              }
          }
          encontro = false;
        }
      }

    public nextCycle(){ 
        //RETIRO DEL ROB
        this.rob.removeInstCompletes();            
        //AGREGO INSTRUCCIONES A LA ER Y ROB
        this.updateERandROB();
        //DECREMENTO INSTRUCCIONES
        for(let i = 0; i<this.uf.length; i++){
            if (this.uf[i].getInstruction()!= null && this.uf[i].getInstruction().getCycle()!=0){
                this.uf[i].getInstruction().decrementCycle();
            }
        }
        //remuevo instrucciones de la uf
        this.removeInstructionUF();
        //AGREGO A UF
        this.updateUF();
        //AGREGO INSTRUCCIONES A LA ER Y ROB
        this.updateERandROB();
        //AGREGO A er Y ROB SI UNA INSTRUCCION ESTA FINALIZADA           
        let sizeDispatch = this.dispatcher.getSize();
        let listAux = this.rob.getListInstructions();
        for(let i = 0; i < sizeDispatch;i++){                  
            let index = this.rob.hasInstructionCompleted(listAux);                    
            if (!this.er.isBusy() &&  index != -1){
                let inst = this.dispatcher.getInstruction();
                listAux.shift()
                inst.setStatus("I");
                this.er.addInstruction(inst);
                this.rob.getRobC()[index].addInstruction2(inst);
            }
        }
             
        //Actualizo UF    
        this.updateUF();
        //actualizo dispatch
        for(let i = 0; i < this.dispatcher.getGrade() && this.listInstruction.length != 0 && !this.dispatcher.isBusy(); i++){
            this.dispatcher.addInstruction(this.listInstruction.shift());
        }
        this.cycleCounter++;
    }

    public getCycleCounter(){
        return this.cycleCounter;
    }

    public getDispatcher(){
        return this.dispatcher;
    }

    public getER(){
        return this.er;
    }

    public getUF(){
        return this.uf;
    }

    public getROB(){
        return this.rob;
    }

    private updateERandROB(){
        let j = 0; 
        while(j < this.dispatcher.getSize()){
            if (!this.er.isBusy() && !this.rob.isBusy()){
                let inst = this.dispatcher.getInstruction();
                inst.setStatus("I");
                this.er.addInstruction(inst);
                this.rob.addInstruction(inst);
            }
            else
                j++;
        }
    }

    private updateUF(){
        let i=0;
        while( i < this.er.instructions.length){  
            let index = this.getUFFree(this.er.instructions[i]);
            if (index != -1){
                let inst = this.er.instructions[i];
                if (!this.hasDependence(inst) && !this.hasDependeceER(inst)){
                    this.uf[index].addInstruction(inst);
                    inst.setStatus("X");
                    this.uf[index].setBusy(true);
                    this.er.removeInstruction(i);                     
                }
                else{
                    i++
                }
            }else{
            i++;
            }
        }
    }

    private removeInstructionUF(){
        for(let i = 0 ; i<this.uf.length; i++){              
            if(this.uf[i].getInstruction()!=null){
                if(this.uf[i].getInstruction().getCycle()==0){
                    this.uf[i].getInstruction().setStatus("F");
                    this.uf[i].removeInstruction();
                    this.uf[i].setBusy(false);
                }
            }
        }
    }

    private hasDependeceER(inst: Instruction) {
        for(let i = 0; i < this.er.instructions.length;i++){
            if(this.er.instructions[i].getId() != inst.getId())
                if(this.er.instructions[i].existDependency(inst))
                    return true;
        }
        return false;
    }

    private hasDependence(inst: Instruction) {
        for(let i = 0; i < this.uf.length;i++){
            if(this.uf[i].getInstruction()!=null){
                if(this.uf[i].getInstruction().existDependency(inst))
                    return true;
            }
        }
        return false;
    }
    private getUFFree(inst:Instruction) {    
       for(let i = 0; i< this.uf.length;i++){
            if(!this.uf[i].isBusy() && this.uf[i].getType() == inst.getUFType())
                return i;
            else
                if ((!this.uf[i].isBusy() && this.uf[i].getType() == "MULTIFUNCT"))
                    return i;
       }
       return -1;
    }

    public isFinished(){
        return this.rob.isComplete();
    }    
}