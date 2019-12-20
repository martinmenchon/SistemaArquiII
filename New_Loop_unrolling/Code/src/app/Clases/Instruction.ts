export class Instruction {

    private id: string;
    private type: string;
    private destination: string;
    private op1: string;
    private op2: string;
    private ciclosFor: number;
    private UFType: string;
    private arrayType: string;
    private cycles: string;
    dependecies: String[] = new Array;

    constructor(id: string, type: string, destination: string, op1: string, op2: string, UFType: string, array: string, ciclosFor: number) {
        this.id = id;
        this.type = type;
        this.destination = destination;
        this.op1 = op1;
        this.op2 = op2;
        this.UFType = UFType;
        this.arrayType = array;
        this.ciclosFor = ciclosFor;
    }

    public getUFType(){
        return this.UFType;
    }

    public setArrayType(array: string) {
        this.arrayType = array;
    }

    public getArrayType() {
        return this.arrayType;
    }

    public setOp1(op1: string) {
        this.op1 = op1;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public getType() {
        return this.type;
    }
    public getDestination() {
        return this.destination;
    }
    public getOp1() {
        return this.op1;
    }
    public getOp2() {
        return this.op2;
    }

    public setciclosFor(ciclosFor) {
        this.ciclosFor = ciclosFor;
    }

    public getciclosFor() {
        return this.ciclosFor;
    }

    public setCycles(cycles) {
        this.cycles = cycles;
    }

    public getcycles() {
        return this.cycles;
    }

    public existDependency(inst: Instruction) {
        return (this.dependecies.includes(inst.id));
    }

    public decrementCycle(){
        let ciclo: number = parseInt(this.cycles);
        ciclo--;
        this.cycles = ciclo.toString();
      }

    public addDependency(i: String) {
        this.dependecies.push(i)
    }  
}