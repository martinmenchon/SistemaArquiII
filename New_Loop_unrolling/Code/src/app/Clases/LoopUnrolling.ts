import { Instruction } from './Instruction';

export class LoopUnrolling {

    listInstructions = new Array<Instruction>();

    constructor(list) {
        this.listInstructions = list;
    }

    contadorInstrucciones = 1;

    private registrosCPU: string[] = ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
        "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
        "L", "L", "L", "L", "L", "L"];

    private mapReg = new Map();

    private getSiguienteReg() {

        for (let i = 0; i < this.registrosCPU.length; i++) {
            if (this.registrosCPU[i] == 'L') {
                this.registrosCPU[i] = 'O';
                return "F" + i;
            }
        }
    }

    ejecutar(maxUnroll: number) {

        let listResul = new Array<Instruction>();

        let indice = 0;
        let cortar = false;
        while (!cortar) {
            if (this.listInstructions[indice].getType() == "LAZO") {
                cortar = true;
            }
            listResul.push(this.listInstructions[indice]);
            indice++;
        }

        for (let i = indice; i < this.listInstructions.length; i++) {

            if (!this.listInstructions[i].getOp2().includes('#')) {

                //chequeo si es BNEZ
                if (this.listInstructions[i].getType() == "BNEZ"){
                    this.listInstructions[i].setId("S"+this.contadorInstrucciones);
                    listResul.push(this.listInstructions[i]);
                }
                    

                // chequeo si es LOAD
                else if (this.listInstructions[i].getType() == "LD") {


                    let list = new Array<string>();
                    for (let i = 0; i < maxUnroll; i++) {
                        list.push(this.getSiguienteReg());
                    }

                    this.mapReg.set(this.listInstructions[i].getDestination(), list);

                    let cont: number = 0;
                    for (let j = 0; j < maxUnroll; j++) {
                        let inst;
                        if ((this.listInstructions[i].getArrayType() == "ENTERO")) {

                            inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), this.mapReg.get(this.listInstructions[i].getDestination())[j],
                                this.listInstructions[i].getOp1().replace('0', cont.toString()), "", "MEM", this.listInstructions[i].getArrayType(), 0);
                            listResul.push(inst);
                            this.contadorInstrucciones++;
                            cont = cont - 4;
                        } else {
                            inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), this.mapReg.get(this.listInstructions[i].getDestination())[j],
                                this.listInstructions[i].getOp1().replace('0', cont.toString()), "", "MEM", this.listInstructions[i].getArrayType(), 0);
                            listResul.push(inst);
                            this.contadorInstrucciones++;
                            cont = cont - 8;
                        }
                    }
                } else if (this.listInstructions[i].getType() == "ST") {

                    let cont: number = 0;
                    for (let j = 0; j < maxUnroll; j++) {
                        let op1;
                        let pos1: number = this.listInstructions[i].getDestination().indexOf('(');
                        let pos2: number = this.listInstructions[i].getDestination().indexOf(')');
                        let reg: string = this.listInstructions[i].getDestination().substring(pos1 + 1, pos2);
                        if (this.mapReg.has(this.listInstructions[i].getOp1()))
                            op1 = this.mapReg.get(this.listInstructions[i].getOp1())[j];
                        else
                            op1 = this.listInstructions[i].getOp1();

                        let inst;
                        if ((this.listInstructions[i].getArrayType() == "ENTERO")) {

                            inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), cont.toString() + " (" + reg + ")",
                                op1, "", "MEM", this.listInstructions[i].getArrayType(), 0);
                            listResul.push(inst);
                            this.contadorInstrucciones++;
                            cont = cont - 4;
                        } else {
                            inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), cont.toString() + " (" + reg + ")",
                                op1, "", "MEM", this.listInstructions[i].getArrayType(), 0);
                            listResul.push(inst);
                            this.contadorInstrucciones++;
                            cont = cont - 8;
                        }

                    }

                } else {

                    let list = new Array<string>();
                    for (let i = 0; i < maxUnroll; i++) {
                        list.push(this.getSiguienteReg());
                    }
                    this.mapReg.set(this.listInstructions[i].getDestination(), list);
                    
                    for (let j = 0; j < maxUnroll; j++) {
                        let op1;
                        let op2;
                        if (this.mapReg.has(this.listInstructions[i].getOp1()))
                            op1 = this.mapReg.get(this.listInstructions[i].getOp1())[j];
                        else
                            op1 = this.listInstructions[i].getOp1();
                        if (this.mapReg.has(this.listInstructions[i].getOp2()))
                            op2 = this.mapReg.get(this.listInstructions[i].getOp2())[j];
                        else
                            op2 = this.listInstructions[i].getOp2();

                        let inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), this.mapReg.get(this.listInstructions[i].getDestination())[j],
                            op1, op2, "ARITH", "", 0);
                        this.contadorInstrucciones++;
                        listResul.push(inst);

                    }


                }

            } else if (this.listInstructions[i].getType() == "SUB" && this.listInstructions[i].getOp2().includes("#")) {
                let inst;
                if (this.listInstructions[i].getOp2().includes('4')) {
                    let shift = 4 * maxUnroll;
                    inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), this.listInstructions[i].getDestination(),
                        this.listInstructions[i].getOp1(), "#" + shift.toString(), "ARITH", "", 0);
                    this.contadorInstrucciones++;
                } else {
                    let shift = 8 * maxUnroll;
                    inst = new Instruction("S" + this.contadorInstrucciones, this.listInstructions[i].getType(), this.listInstructions[i].getDestination(),
                        this.listInstructions[i].getOp1(), "#" + shift.toString(), "ARITH", "", 0);
                    this.contadorInstrucciones++;
                }
                listResul.push(inst);
            }





        }

        return listResul;

    }


}

