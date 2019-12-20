import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Instruction } from './Clases/Instruction';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { LoopUnrolling } from './Clases/LoopUnrolling';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Processor } from './Clases/Processor';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild("siteConfigNetwork", { static: true }) networkContainer: ElementRef;

  listInstructions = new Array<Instruction>();
  listInstructionsUnrolling = new Array<Instruction>();
  listaSinLazo = new Array<Instruction>();

  listExample1 = new Array<Instruction>();
  listExample2 = new Array<Instruction>();
  listExample3 = new Array<Instruction>();
  listExample4 = new Array<Instruction>();

  advertencia: string;
  maxUnroll: number;
  cantidadCiclosFor = 1000;
  timeSec = 0;
  timePar = 0;
  timeTotal;
  numOrder = 1;
  numMultifunction = 0;
  numArithmetic = 0;
  numMemory = 0;
  configurationSaved: boolean = false;

  configurationSavedCycles: boolean = false;
  configurationSavedLazo: boolean = true;
  configurationSavedArr: boolean = true;
  configurationSavedInst: boolean = true;

  ciclosDesarrollados: number = 0;
  tiempoTotalsecuencial: number = 0;
  tiempoTotalplanificado: number = 0;
  aceleracion: number = 0;

  showAlert = false;


  // variables simulador
  sigInstruction = true;
  executing = false;
  executeLoop = false;
  DHeaders: Array<string>;
  rowCycle: Array<string>;
  UFHeaders: Array<string>;
  cpu: Processor;

  typeInstruction = [
    { type: "ADD", cycle: 1 },
    { type: "SUB", cycle: 1 },
    { type: "MUL", cycle: 1 },
    { type: "DIV", cycle: 1 },
    { type: "ST", cycle: 1 },
    { type: "LD", cycle: 1 },
    { type: "BNEZ", cycle: 1 },
  ];

  registers: string[] = [
    "#4",
    "#8",
    "R0",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    "R9",
    "R10",
    "R11",
    "R12",
    "R13",
    "R14",
    "R15",
    "R16",
    "R17",
    "R18",
    "R19",
    "R20",
    "R21",
    "R22",
    "R23",
    "R24",
    "R25",
    "R26",
    "R27",
    "R28",
    "R29",
    "R30",
    "R31",
  ];

  btnDefaultIns = {
    type: "Instrucción",
    dst: "Dst",
    op1: "Op1",
    op2: "Op2"
  };

  //mapTipoArreglos = new Map();

  btnDefaultCarga = {
    typeReg: "Tipo",
    cycles: "Cantidad ciclos",
    dstLoad: "Dst",
  };

  typeArray: string[] = [
    "ENTERO",
    "DOUBLE",
  ];

  ngOnInit(): void {
    this.listExample1 = [
      new Instruction("", "LD", "R1", "4000", "", "ARITH", "ENTERO", 1000),
      new Instruction("", "LAZO", "", "", "", "", "", 0),
      new Instruction("", "LD", "R2", "0 (R1)", "", "MEM", "ENTERO", 0),
      new Instruction("", "SUB", "R4", "R2", "R10", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R1)", "R4", "", "MEM", "ENTERO", 0),
      new Instruction("", "SUB", "R1", "R1", "#4", "ARITH", "", 0),
      new Instruction("", "BNEZ", "R1", "LAZO", "", "ARITH", "", 0)
    ];

    this.listExample2 = [
      new Instruction("", "LD", "R1", "4000", "", "ARITH", "ENTERO", 1000),
      new Instruction("", "LD", "R2", "12000", "", "ARITH", "DOUBLE", 1000),
      new Instruction("", "LAZO", "", "", "", "", "", 0),
      new Instruction("", "LD", "R3", "0 (R1)", "", "MEM", "ENTERO", 0),
      new Instruction("", "MUL", "R4", "R3", "R10", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R1)", "R4", "", "MEM", "ENTERO", 0),
      new Instruction("", "LD", "R5", "0 (R2)", "", "MEM", "DOUBLE", 0),
      new Instruction("", "ADD", "R6", "R11", "R5", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R2)", "R6", "", "MEM", "DOUBLE", 0),
      new Instruction("", "SUB", "R1", "R1", "#4", "ARITH", "", 0),
      new Instruction("", "SUB", "R2", "R2", "#8", "ARITH", "", 0),
      new Instruction("", "BNEZ", "R1", "LAZO", "", "ARITH", "", 0)
    ];

    this.listExample3 = [
      new Instruction("", "LD", "R5", "16000", "", "ARITH", "DOUBLE", 2000),
      new Instruction("", "LAZO", "", "", "", "", "", 0),
      new Instruction("", "LD", "R2", "0 (R5)", "", "MEM", "DOUBLE", 0),
      new Instruction("", "DIV", "R4", "R2", "R3", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R5)", "R4", "", "MEM", "DOUBLE", 0),
      new Instruction("", "SUB", "R1", "R1", "#8", "ARITH", "", 0),
      new Instruction("", "BNEZ", "R1", "LAZO", "", "ARITH", "", 0)
    ];

    this.listExample4 = [
      new Instruction("", "LD", "R1", "4000", "", "ARITH", "ENTERO", 1000),
      new Instruction("", "LD", "R2", "8000", "", "ARITH", "ENTERO", 1000),
      new Instruction("", "LAZO", "", "", "", "", "", 0),
      new Instruction("", "LD", "R5", "0 (R1)", "", "MEM", "ENTERO", 0),
      new Instruction("", "ADD", "R4", "R5", "R15", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R1)", "R4", "", "MEM", "ENTERO", 0),
      new Instruction("", "LD", "R10", "0 (R2)", "", "MEM", "ENTERO", 0),
      new Instruction("", "DIV", "R7", "R10", "R11", "ARITH", "", 0),
      new Instruction("", "ST", "0 (R2)", "R7", "", "MEM", "ENTERO", 0),
      new Instruction("", "SUB", "R1", "R1", "#4", "ARITH", "", 0),
      new Instruction("", "SUB", "R2", "R2", "#4", "ARITH", "", 0),
      new Instruction("", "BNEZ", "R1", "LAZO", "", "ARITH", "", 0)
    ];
  }

  changeExample1() {
    this.cantidadCiclosFor = 1000;
    this.listInstructions = Object.assign([], this.listExample1);
  }

  changeExample2() {
    this.cantidadCiclosFor = 1000;
    this.listInstructions = Object.assign([], this.listExample2);
  }

  changeExample3() {
    this.cantidadCiclosFor = 2000;
    this.listInstructions = Object.assign([], this.listExample3);
  }

  changeExample4() {
    this.cantidadCiclosFor = 1000;
    this.listInstructions = Object.assign([], this.listExample4);
  }

  changeLoop(num) {
    this.cantidadCiclosFor = num;
    let btnCiclos = document.getElementById("btn-Confirmar");
    if (this.cantidadCiclosFor != 0)
      btnCiclos.removeAttribute("disabled");
  }

  changeInst(pos, name) {
    this.btnDefaultIns[pos] = name;
    this.updateButton();
  }

  changeCarga(pos, name) {
    this.btnDefaultCarga[pos] = name;
    this.updateButtonLoad();
  }

  updateButtonLoad() {
    let btnAgregarLd = document.getElementById("btn-Agregar-LD");

    if (this.btnDefaultCarga.typeReg != "Tipo" && this.btnDefaultCarga.dstLoad != "Dst")
      btnAgregarLd.removeAttribute("disabled");
  }

  habilitaCargaArreglos() {
    this.configurationSavedCycles = true;
    this.configurationSavedArr = false;
  }

  habilitaCargaInst() {
    this.configurationSavedArr = true;
    let instNueva = new Instruction("", "LAZO", "", "", "", "", "", 0);
    this.listInstructions.push(instNueva);
    this.configurationSavedInst = false;
    this.configurationSavedLazo = true;
  }

  addInstructionLoad() {
    let instNueva;

    let tipo: string = this.btnDefaultCarga.typeReg;
    let tamano: number;
    if (tipo == "ENTERO")
      tamano = this.cantidadCiclosFor * 4;
    else
      tamano = this.cantidadCiclosFor * 8;

    let tamTot;
    if (this.listInstructions.length > 0) {
      tamTot = tamano + parseInt(this.listInstructions[this.listInstructions.length - 1].getOp1());
    } else
      tamTot = tamano;

    this.configurationSavedLazo = false;
    //this.mapTipoArreglos.set(this.btnDefaultCarga.dstLoad, tipo);
    instNueva = new Instruction("", "LD", this.btnDefaultCarga.dstLoad, tamTot.toString(), "", "ARITH", tipo, this.cantidadCiclosFor);
    this.listInstructions.push(instNueva);
  }

  aux: string = "Op1";

  updateButton() {
    let btnAgr = document.getElementById("btn-Agregar");
    let btnDst = document.getElementById("btn-dst");
    let btnOp1 = document.getElementById("btn-op1");
    let btnOp2 = document.getElementById("btn-op2");

    switch (this.btnDefaultIns.type) {

      case "ST": {
        if (this.btnDefaultIns.op1 == "LAZO")
          this.btnDefaultIns.op1 = this.aux;
        btnDst.removeAttribute("disabled");
        btnOp1.removeAttribute("disabled");
        btnOp2.setAttribute("disabled", "");
        btnAgr.setAttribute("disabled", "");
        if (this.btnDefaultIns.dst != "Dst" && this.btnDefaultIns.op1 != "Op1")
          btnAgr.removeAttribute("disabled");
        break;
      }
      case "LD": {
        if (this.btnDefaultIns.op1 == "LAZO")
          this.btnDefaultIns.op1 = this.aux;
        btnDst.removeAttribute("disabled");
        btnOp1.removeAttribute("disabled");
        btnOp2.setAttribute("disabled", "");
        btnAgr.setAttribute("disabled", "");
        if (this.btnDefaultIns.dst != "Dst" && this.btnDefaultIns.op1 != "Op1")
          btnAgr.removeAttribute("disabled");
        break;
      }
      case "BNEZ": {
        if (this.btnDefaultIns.op1 == "LAZO")
          this.btnDefaultIns.op1 = this.aux;
        btnDst.removeAttribute("disabled");
        btnOp1.setAttribute("disabled", "");
        this.aux = this.btnDefaultIns.op1;
        this.btnDefaultIns.op1 = "LAZO";
        btnOp2.setAttribute("disabled", "");
        if (this.btnDefaultIns.dst != "Dst")
          btnAgr.removeAttribute("disabled");
        break;
      }
      case "LAZO": {
        if (this.btnDefaultIns.op1 == "LAZO")
          this.btnDefaultIns.op1 = this.aux;
        btnDst.setAttribute("disabled", "");
        btnOp1.setAttribute("disabled", "");
        btnOp2.setAttribute("disabled", "");
        btnAgr.removeAttribute("disabled");
        break;
      }
      default: {
        if (this.btnDefaultIns.op1 == "LAZO")
          this.btnDefaultIns.op1 = this.aux;
        btnDst.removeAttribute("disabled");
        btnOp1.removeAttribute("disabled");
        btnOp2.removeAttribute("disabled");
        btnAgr.setAttribute("disabled", "");
        if (this.btnDefaultIns.type != "Instrucción" && this.btnDefaultIns.dst != "Dst" && this.btnDefaultIns.op1 != "Op1" && this.btnDefaultIns.op2 != "Op2")
          btnAgr.removeAttribute("disabled");
        break;
      }
    }

  }

  addInstruction() {
    let instNueva;

    if (this.btnDefaultIns.type == "ST") {
      instNueva = new Instruction("", this.btnDefaultIns.type, "0 (" + this.btnDefaultIns.dst + ")", this.btnDefaultIns.op1, "", "MEM", ""/*this.mapTipoArreglos.get(this.btnDefaultIns.dst)*/, 0);
    }
    else
      if (this.btnDefaultIns.type == "LD") {
        instNueva = new Instruction("", this.btnDefaultIns.type, this.btnDefaultIns.dst, "0 (" + this.btnDefaultIns.op1 + ")", "", "MEM", ""/*this.mapTipoArreglos.get(this.btnDefaultIns.op1)*/, 0);
      }
      else
        if (this.btnDefaultIns.type == "BNEZ")
          instNueva = new Instruction("", this.btnDefaultIns.type, this.btnDefaultIns.dst, "LAZO", "", "ARITH", "", 0);
        else
          instNueva = new Instruction("", this.btnDefaultIns.type, this.btnDefaultIns.dst, this.btnDefaultIns.op1, this.btnDefaultIns.op2, "ARITH", "", 0);
    this.listInstructions.push(instNueva);
  }

  changeOrder(num) {
    this.numOrder = num;
  }

  deleteInstruction(inst: Instruction) {
    let i = this.listInstructions.indexOf(inst);
    if (this.listInstructions[i].getType() == "LD" && !this.listInstructions[i].getOp1().includes('(')) {
      this.recalculateCycles(i, this.listInstructions[i].getciclosFor(), this.listInstructions[i].getArrayType());
      //this.mapTipoArreglos.delete(this.listInstructions[i].getDestination());
    }
    this.listInstructions.splice(i, 1);

  }

  recalculateCycles(i: number, ciclos: number, tipo: string) {

    for (var j = 0; j < this.listInstructions.length; j++)
      if (this.listInstructions[j].getType() == "LD" && !this.listInstructions[j].getOp1().includes('(')) {
        if (i < j) {
          const actual: number = parseInt(this.listInstructions[j].getOp1());
          if (tipo == "ENTERO")
            this.listInstructions[j].setOp1((actual - (ciclos * 4)).toString());
          else
            this.listInstructions[j].setOp1((actual - (ciclos * 8)).toString());
        }
      }

  }

  changeUFmultifunction(num) {
    this.numMultifunction = num;
  }

  changeUFArithmetic(num) {
    this.numArithmetic = num;
  }

  changeUFMemory(num) {
    this.numMemory = num;
  }

  changeCycle(pos, numcycle) {
    for (let tipoIns of this.typeInstruction) {
      if (tipoIns.type == pos)
        tipoIns.cycle = numcycle;
    }
  }

  saveConfiguration() {
    //console.log(this.mapTipoArreglos);
    if (this.listInstructions.length != 0)
      if (this.chequeoCiclosArr()) {
        if (this.numArithmetic != 0 || this.numMemory != 0 || this.numMultifunction != 0) {
          this.showAlert = false;
          this.configurationSaved = true;
          this.configurationSavedCycles = true;
          this.configurationSavedArr = true;
          this.configurationSavedLazo = true;
          this.configurationSavedInst = true;

          this.executeLoop = false;
          this.executing = true;
        } else {
          this.advertencia = "Debes agregar una UF para ejecutar las instrucciones."
          this.showAlert = true;
        }
      } else {
        this.advertencia = "Todos los arreglos deben ser definidos para la misma cantidad de Ciclos."
        this.showAlert = true;
      }
    else {
      this.advertencia = "Ingrese Instrucciones."
      this.showAlert = true;
    }
  }

  chequeoCiclosArr(): boolean {
    let result: boolean = true;
    let check: number = this.listInstructions[0].getciclosFor();
    this.listInstructions.forEach(e => {
      if (e.getType() == "LD" && !e.getOp1().includes('(')) 
        if (e.getciclosFor() != check)
          result = false;
    });
    return result;
  }

  private setCyclesUnrolling() {
    for (let i = 0; i < this.listInstructionsUnrolling.length; i++) {
      for (let j = 0; j < this.typeInstruction.length; j++)
        if (this.listInstructionsUnrolling[i].getType() == this.typeInstruction[j].type) {
          this.listInstructionsUnrolling[i].setCycles(this.typeInstruction[j].cycle);
        }
    }
  }

  private setCycles() {
    for (let i = 0; i < this.listInstructions.length; i++) {
      for (let j = 0; j < this.typeInstruction.length; j++)
        if (this.listInstructions[i].getType() == this.typeInstruction[j].type) {
          this.listInstructions[i].setCycles(this.typeInstruction[j].cycle);
        }
    }
  }

  resetConfiguration() {
    this.configurationSaved = false;
    this.showAlert = false;
    this.configurationSavedCycles = false;
    this.configurationSavedArr = true;
    this.configurationSavedInst = true;
    this.configurationSavedLazo = true;
    this.sigInstruction = false;
    this.executing = false;
    this.executeLoop = false;
    //this.mapTipoArreglos = new Map();
    this.listInstructions = new Array<Instruction>();
    this.listInstructionsUnrolling = null;
    this.listaSinLazo = new Array<Instruction>();
    document.getElementById("Desarrollo").style.display = "none";
    document.getElementById("Result").style.display = "none";
  }

  ejecutarLoopUnrolling() {
    document.getElementById("Desarrollo").style.display = "block";

    this.maxUnroll = Math.max(this.numArithmetic, this.numMemory, this.numMultifunction);
    console.log(this.listInstructions);
    this.setArrayTypes();
    this.setCycles();
    this.timeSec = this.getTimeSecuencial();
    console.log(this.listInstructions);
    let loop = new LoopUnrolling(this.listInstructions);
    this.listInstructionsUnrolling = loop.ejecutar(this.maxUnroll);
    this.setCyclesUnrolling();
    this.simuladorLoopUnrolling();

  }

  setArrayTypes(){

    let map = new Map();
    this.listInstructions.forEach(e => {
      if (e.getType() == "LD" && !e.getOp1().includes('('))
        map.set(e.getDestination(), e.getArrayType());
      else if (e.getType() == "LD"){
        e.setArrayType(map.get(this.getOperandoParentesis(e.getOp1())));
      } else if (e.getType() == "ST"){
        e.setArrayType(map.get(this.getOperandoParentesis(e.getDestination())));
      }

    });


  }

  public getTimeSecuencial() {
    let sum = 0;
    let pasoLazo: boolean = false;
    for (let inst of this.listInstructions) {
      if (pasoLazo)
        sum = sum + parseInt(inst.getcycles());
      if (inst.getType() == 'LAZO')
        pasoLazo = true;
    }
    return sum;
  }

  simuladorLoopUnrolling() {

    this.sigInstruction = true;
    this.executing = false;
    this.executeLoop = true;
    this.createTableHead("D", this.numOrder);
    this.createTableHeadUF("UF", this.numMultifunction, this.numMemory, this.numArithmetic);

    for (let index = 0; index < this.listInstructionsUnrolling.length; index++) {
      if (this.listInstructionsUnrolling[index].getId() != "") {
        this.listaSinLazo.push(this.listInstructionsUnrolling[index]);
      }

    }

    this.cpu = new Processor(this.listaSinLazo, this.numOrder);
    this.cpu.addUF(this.numArithmetic, this.numMemory, this.numMultifunction);
  }

  public nextInstruction() {
    if (!this.cpu.isFinished()) {
      this.cpu.nextCycle();
      this.addRowCounter(this.cpu.getCycleCounter());
      this.addRow(this.cpu.getDispatcher().instruction, "tablaDispatch", this.numOrder);
      this.addRowUF(this.cpu.getUF());
    }
    else {
      this.sigInstruction = false;
      document.getElementById("Result").style.display = "block";
      this.timePar = this.cpu.getCycleCounter();
      this.ciclosDesarrollados = this.cantidadCiclosFor / this.maxUnroll;

      this.tiempoTotalsecuencial = this.cantidadCiclosFor * this.timeSec;
      this.ciclosDesarrollados = parseFloat(this.ciclosDesarrollados.toFixed(2));
      this.tiempoTotalplanificado = this.ciclosDesarrollados * this.timePar;
      this.tiempoTotalplanificado = parseFloat(this.tiempoTotalplanificado.toFixed(2));
      this.aceleracion = this.tiempoTotalsecuencial / this.tiempoTotalplanificado;
      this.aceleracion = parseFloat(this.aceleracion.toFixed(2));
      

    }
  }

  addRowCounter(cycleCounter: number) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.appendChild(document.createTextNode("" + cycleCounter));
    tr.appendChild(td);
    document.getElementById("tablacycle").appendChild(tr);

  }

  addRow(inst: Array<Instruction>, id: string, cantidad: Number) {
    let tr = document.createElement("tr");
    for (let i = 0; i < cantidad; i++) {
      let td = document.createElement("td");
      if (i < inst.length) {
        td.appendChild(document.createTextNode(inst[i].getId()));
        tr.appendChild(td);
      }
      else {
        td.appendChild(document.createTextNode("-"));
        tr.appendChild(td);
      }
    }
    document.getElementById(id).appendChild(tr);
  }

  addRowUF(uf) {
    let tr = document.createElement("tr");
    for (let i = 0; i < uf.length; i++) {
      let td = document.createElement("td");
      if (uf[i].getInstruction() != null) {
        td.appendChild(document.createTextNode(uf[i].getInstruction().getId()));
        tr.appendChild(td);
      }
      else {
        td.appendChild(document.createTextNode("-"));
        tr.appendChild(td);
      }

    }
    document.getElementById("tablaUF").appendChild(tr);
  }

  private createTableHead(desc: string, num: number) {
    let array = [];
    for (let i = 0; i < num; i++) {
      array.push(desc + i);
    }
    this[desc + 'Headers'] = array;
  }

  private createTableHeadUF(desc: string, numM: number, numMem: number, numA: number) {
    let array = [];
    for (let i = 0; i < numM; i++) {
      array.push(desc + "M" + i);
    }
    for (let i = 0; i < numA; i++) {
      array.push(desc + "A" + i);
    }
    for (let i = 0; i < numMem; i++) {
      array.push(desc + "Mem" + i);
    }
    this[desc + 'Headers'] = array;
  }

  private getOperandoParentesis(op: string): string {
    let pos1: number = op.indexOf('(');
    let pos2: number = op.indexOf(')');
    return op.substring(pos1 + 1, pos2);
}

}
