import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.css']
})
export class SimulationResultComponent implements OnInit {

  private guiHandlerService: GuiHandlerService;
  private simulationFinish: boolean = false;

  text: string = "hola desde ts";

  constructor(guiHandlerService: GuiHandlerService) { 
    this.guiHandlerService = guiHandlerService;
  }

  ngOnInit() {
    this.guiHandlerService.observableIsFinish.subscribe(isFinish => {
      this.simulationFinish = isFinish;
      this.text = this.guiHandlerService.planificatedOrder;
    });
  }

}
