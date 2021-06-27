import { FUType, InstType, InstStatus } from './Enums';


export class Instruction {
    private id: number;
    private idCharacter: string;
    private type: InstType;
    private fuType: FUType;
    private op1: number;
    private op2: number;
    private destination: number;
    private cycles: number;
    private status: InstStatus;
    private dependencies: Array<number>;


    constructor(id: number, type: InstType, fuType: FUType, destination: number, op1: number, op2?: number) {
        this.id = id;
        this.idCharacter = 'I';
        this.type = type;
        this.destination = destination;
        this.op1 = op1;
        this.op2 = op2;
        this.fuType = fuType;

        this.cycles = 0;
        this.dependencies = new Array<number>();
        this.status = InstStatus.WAITING;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getType(): InstType {
        return this.type;
    }

    public setType(type: InstType) {
        this.type = type;
    }

    public getFUType(): FUType {
        return this.fuType;
    }

    public setFUType(fuType: FUType) {
        this.fuType = fuType;
    }

    public getOP1(): number {
        return this.op1;
    }

    public setOP1(op1: number) {
        this.op1 = op1;
    }

    public getOP2(): number {
        return this.op2;
    }

    public setOP2(op2: number) {
        this.op2 = op2;
    }

    public getDestination(): number {
        return this.destination;
    }

    public setDestination(destination: number) {
        this.destination = destination;
    }

    public getCycles(): number {
        return this.cycles;
    }

    public setCycles(cycles: number) {
        this.cycles = cycles;
    }

    public getStatus(): InstStatus {
        return this.status;
    }

    public setStatus(status: InstStatus) {
        this.status = status;
    }

    public getDependencies(): Array<number> {
        return this.dependencies;
    }

    public clearDependencies() {
        this.dependencies = new Array<number>();
    }

    public addDependency(dependency: number) {
        this.dependencies.push(dependency);
    }

    public removeDependency(dependency: number) {
        const index: number = this.dependencies.lastIndexOf(dependency);
        if (index > -1) {
            this.dependencies.splice(index, 1);
        }
    }

    public getIdString(): string {
        return this.idCharacter+this.id;
    }

    public getDestinationString(): string {
        if (this.type === InstType.ST) {
            return '(R' + this.destination.toString() + ')';
        } else {
            return 'R' + this.destination.toString();
        }
    }

    public getOP1String(): string {
        if (this.type === InstType.LD) {
            return '(R' + this.op1 + ')';
        } else {
            return 'R' + this.op1;
        }
    }

    public getOP2String(): string {
        if (this.fuType === FUType.MEMORY)
            return '';
        else
            return 'R' + this.op2;
    }


    public toString = (): string => {
        return `Instruction (${this.id}, ${this.type}, ${this.getDestinationString()}, ${this.getOP1String()}, ${this.getOP2String()})`;
    }

    public existDependency(inst: Instruction):boolean {
      return (this.dependencies.includes(inst.getId()));
    }

}
