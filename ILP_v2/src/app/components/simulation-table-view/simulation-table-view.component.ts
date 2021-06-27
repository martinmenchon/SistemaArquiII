import { SimulationStep } from './../../models/SimulationStep';
import {Component, OnInit} from '@angular/core';
import {GuiHandlerService} from "../../services/gui-handler.service";

@Component({
  selector: 'app-simulation-table-view',
  templateUrl: './simulation-table-view.component.html',
  styleUrls: ['./simulation-table-view.component.css']
})
export class SimulationTableViewComponent implements OnInit {

  private guiHandler: GuiHandlerService;

  simulationSteps: Array<SimulationStep>;

  constructor(guiHandlerService: GuiHandlerService) {
    this.guiHandler = guiHandlerService;
  }

  ngOnInit() {
    this.guiHandler.observableSimulationSteps.subscribe( simulationSteps => {
      this.simulationSteps = simulationSteps;
    });
  }

  public nextCycle() {
    this.guiHandler.nextCycleSimulation();
  }

  public restart() {
    this.guiHandler.restartSimulation();
  }

}
