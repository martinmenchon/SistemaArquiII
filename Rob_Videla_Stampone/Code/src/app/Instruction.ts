export class Instruction {
    private id:string;
    private type:string
    private destination:string;
    private op1:string;
    private op2:string;
    private status:string
    private cycles: number;
    private UFType : string;
    dependecies:String[] = new Array;

    constructor(id:string,type:string,destination:string,op1:string,op2:string,UFType:string) {
      this.id=id;
      this.type=type;
      this.destination=destination;
      this.op1=op1;
      this.op2=op2;
      this.UFType = UFType; 
    }
    
    public setID(id:string){
      this.id=id;
    }

    public setStatus(t:string){
      this.status = t;
    }
    public getStatus(){
      return this.status;
    }
    public getUFType(){
      return this.UFType;
    }
    public getId(){
      return this.id;
    }
    
    public addDependency(i:String){
      this.dependecies.push(i)
    }
    public getType(){
      return this.type;
    }
    public getDestination(){
      return this.destination;
    }
    public getOp1(){
      return this.op1;
    }
    public getOp2(){
      return this.op2;
    }

    public setCycles(cycle){
      this.cycles=cycle; 
      }
    
      public getCycle(){
        return this.cycles;
      }

    public decrementCycle(){
      this.cycles--;
    }
    
  
    public existDependency(inst:Instruction){
      return (this.dependecies.includes(inst.id));
    }
  }