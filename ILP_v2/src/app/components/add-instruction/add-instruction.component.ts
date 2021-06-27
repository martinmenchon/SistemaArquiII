import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/models/Instruction';
import { InstType, FUType } from 'src/app/models/Enums';


@Component({
  selector: 'app-add-instruction',
  templateUrl: './add-instruction.component.html',
  styleUrls: ['./add-instruction.component.css']
})


export class AddInstructionComponent implements OnInit {

  registers: string[] = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15',
    'R16', 'R17', 'R18', 'R19', 'R20', 'R21', 'R22', 'R23', 'R24', 'R25', 'R26', 'R27', 'R28', 'R29', 'R30', 'R31'];

  addInstructionButtonLabels = {
    type: 'INST',
    dst: 'DST',
    op1: 'OP1',
    op2: 'OP2'
  };

  typesInstruction = [
    InstType.ADD,
    InstType.SUB,
    InstType.DIV,
    InstType.MUL,
    InstType.ST,
    InstType.LD
  ];


  private guiHandler: GuiHandlerService;

  constructor(guiHandler: GuiHandlerService) {
    this.guiHandler = guiHandler;
  }

  ngOnInit() {
  }


  change(pos, name) {
    this.addInstructionButtonLabels[pos] = name;
    this.updateButton();
  }

  updateButton() {
    const btnAgr = document.getElementById('btn-Agregar');
    const btnOp2 = document.getElementById('btn-op2');
    if (this.addInstructionButtonLabels.type !== 'INST'
      && this.addInstructionButtonLabels.dst !== 'DST'
      && this.addInstructionButtonLabels.op1 !== 'OP1'
      && this.addInstructionButtonLabels.op2 !== 'OP2') {
      btnAgr.removeAttribute('disabled');
    }
    if (this.addInstructionButtonLabels.type === 'ST'
      || this.addInstructionButtonLabels.type === 'LD') {
      btnOp2.setAttribute('disabled', '');

      if (this.addInstructionButtonLabels.dst !== 'DST' && this.addInstructionButtonLabels.op1 !== 'OP1') {
        btnAgr.removeAttribute('disabled');
      }
    } else {
      btnOp2.removeAttribute('disabled');
    }
  }


  addInstruction() {

    let newInstruction;
    const stringType: string = this.addInstructionButtonLabels.type;

    switch (stringType) {
      case 'ST': {
        newInstruction = new Instruction(
          0,
          InstType.ST,
          FUType.MEMORY,
          this.registers.indexOf(this.addInstructionButtonLabels.dst),
          this.registers.indexOf(this.addInstructionButtonLabels.op1));
        break;
      }
      case 'LD': {
        newInstruction = new Instruction(
          0,
          InstType.LD,
          FUType.MEMORY,
          this.registers.indexOf(this.addInstructionButtonLabels.dst),
          this.registers.indexOf(this.addInstructionButtonLabels.op1));
        break;
      }
      default: {
        newInstruction = new Instruction(
          0,
          this.getInstructionType(stringType),
          FUType.ARITHMETIC,
          this.registers.indexOf(this.addInstructionButtonLabels.dst),
          this.registers.indexOf(this.addInstructionButtonLabels.op1),
          this.registers.indexOf(this.addInstructionButtonLabels.op2));
        break;
      }
    }

    this.guiHandler.addInstruction(newInstruction);

  }

  private getInstructionType(type: string): InstType {
    switch (type) {
      case 'ADD': {
        return InstType.ADD;
        break;
      }

      case 'SUB': {
        return InstType.SUB;
        break;
      }

      case 'MUL': {
        return InstType.MUL;
        break;
      }

      case 'DIV': {
        return InstType.DIV;
        break;
      }

      case 'ST': {
        return InstType.ST;
        break;
      }

      case 'LD': {
        return InstType.LD;
        break;
      }

    }
  }

}
