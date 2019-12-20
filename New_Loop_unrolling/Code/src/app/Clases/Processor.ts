import { Instruction } from './Instruction';
import { Dispatch } from './Dispatch';
import { FunctionalUnit } from './FunctionalUnit';

export class Processor {
    private dispatcher: Dispatch;
    private uf: Array<FunctionalUnit>;
    private cycleCounter = -1;
    private listInstruction: Array<Instruction>;

    constructor(instrucciones: Array<Instruction>, numOrden) {
        this.listInstruction = instrucciones.slice(0);
        this.setDependenciasRAW();
        this.dispatcher = new Dispatch(numOrden);
        this.uf = new Array<FunctionalUnit>();
    }

    public addUF(numArithmetic, numMemory, numMultifunction) {
        for (let i = 0; i < numMultifunction; i++)
            this.uf.push(new FunctionalUnit("MULTIFUNCT"));
        for (let i = 0; i < numArithmetic; i++)
            this.uf.push(new FunctionalUnit("ARITH"));
        for (let i = 0; i < numMemory; i++)
            this.uf.push(new FunctionalUnit("MEM"));
    }

    public setDependenciasRAW() {
        let encontro = false;

        let indice = 0;

        for (let i = indice; i < this.listInstruction.length - 1; i++) {
            if (this.listInstruction[i].getType() != "ST")
                for (let j = i + 1; j < this.listInstruction.length && !encontro; j++) {
                    if (this.listInstruction[j].getType() != "ST") {
                        if (this.listInstruction[j].getType() == "LD")
                            if (this.getOperandoParentesis(this.listInstruction[j].getOp1()) == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination() == this.listInstruction[j].getOp2())
                                this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                        if (this.listInstruction[j].getOp1() == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination() == this.listInstruction[j].getOp2())
                            this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                        if (this.listInstruction[i].getDestination() == this.listInstruction[j].getDestination()) {
                            encontro = true;
                            if (this.listInstruction[j].getType() == "BNEZ")
                                this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                        }
                    }
                    else {
                        if (this.getOperandoParentesis(this.listInstruction[j].getDestination()) == this.listInstruction[i].getDestination() || this.listInstruction[i].getDestination() == this.listInstruction[j].getOp1())
                            this.listInstruction[i].addDependency(this.listInstruction[j].getId());
                    }
                }
            encontro = false;
        }
    }

    public getOperandoParentesis(op: string): string {
        let pos1: number = op.indexOf('(');
        let pos2: number = op.indexOf(')');
        return op.substring(pos1 + 1, pos2);
    }

    public nextCycle() {

        //DECREMENTO INSTRUCCIONES EN LAS UF
        for (let i = 0; i < this.uf.length; i++) {
            if (this.uf[i].getInstruction() != null && parseInt(this.uf[i].getInstruction().getcycles()) != 0) {
                this.uf[i].getInstruction().decrementCycle();
            }
        }
        //remuevo instrucciones de la uf
        this.removeInstructionUF();
        //AGREGO A UF
        let ubicados = this.updateUF();

        // saco instrucciones del dispatch
        this.removeFromDispatch(ubicados);

        //actualizo dispatch
        for (let i = 0; i < this.dispatcher.getGrade() && this.listInstruction.length != 0 && !this.dispatcher.isBusy(); i++) {
            this.dispatcher.addInstruction(this.listInstruction.shift());
        }

        this.cycleCounter++;
    }

    public getCycleCounter() {
        return this.cycleCounter;
    }

    public getDispatcher() {
        return this.dispatcher;
    }

    public getUF() {
        return this.uf;
    }

    private updateUF() {
        let i = 0;
        let ubicados = new Array();
        while (i < this.dispatcher.instruction.length) {
            let index = this.getUFFree(this.dispatcher.instruction[i]);
            if (index != -1) {
                let inst: Instruction = this.dispatcher.instruction[i];
                if (!this.hasDependenceUF(inst) && !this.dispatcher.hasDependenceD(inst)) {
                    this.uf[index].addInstruction(inst);
                    this.uf[index].setBusy(true);
                    ubicados.push(inst);
                }
            } 
            i++;
        }
        return ubicados;
    }

    private removeFromDispatch(ubicados){
        ubicados.forEach(e => {
            this.dispatcher.remove(e);
        });
    }

    private removeInstructionUF() {
        for (let i = 0; i < this.uf.length; i++) {
            if (this.uf[i].getInstruction() != null) {
                if (parseInt(this.uf[i].getInstruction().getcycles()) == 0) {
                    this.uf[i].removeInstruction();
                    this.uf[i].setBusy(false);
                }
            }
        }
    }

    private hasDependenceUF(inst: Instruction) {
        for (let i = 0; i < this.uf.length; i++) {
            if (this.uf[i].getInstruction() != null) {
                if (this.uf[i].getInstruction().existDependency(inst))
                    return true;
            }
        }
        return false;
    }

    private getUFFree(inst: Instruction) {
        for (let i = 0; i < this.uf.length; i++) {
            if (!this.uf[i].isBusy() && this.uf[i].getType() == inst.getUFType())
                return i;
            else
                if ((!this.uf[i].isBusy() && this.uf[i].getType() == "MULTIFUNCT"))
                    return i;
        }
        return -1;
    }

    private allUFFree(): boolean {
        for (let i = 0; i < this.uf.length; i++) {
            if (this.uf[i].isBusy())
                return false;
        }
        return true;
    }

    public isFinished() {
        if (this.listInstruction.length == 0 && this.allUFFree())
            return true;
        return false;
    }
}