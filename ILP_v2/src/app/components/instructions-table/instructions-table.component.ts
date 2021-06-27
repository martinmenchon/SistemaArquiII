import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/models/Instruction';

@Component({
  selector: 'app-instructions-table',
  templateUrl: './instructions-table.component.html',
  styleUrls: ['./instructions-table.component.css']
})
export class InstructionsTableComponent implements OnInit {

  instructions: Array<Instruction>;
  private guiHandler: GuiHandlerService;



  constructor(guiHandler: GuiHandlerService) {
    this.guiHandler = guiHandler;
  }

  ngOnInit() {
    this.guiHandler.observableInstructions.subscribe( instructions => {
      this.instructions = instructions;
    });
  }


  deleteInstruction(inst: Instruction) {
    this.guiHandler.deleteInstruction(inst);

  }

  clearInstructions(){
    this.guiHandler.clearInstructions();
  }




}
