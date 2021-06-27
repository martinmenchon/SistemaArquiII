import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';
import { Diagram } from 'gojs';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  private guiHandlerService: GuiHandlerService;

  private diagram: Diagram;


  constructor(guiHandlerService: GuiHandlerService) { 
    this.guiHandlerService = guiHandlerService;
  }

  ngOnInit() {

    this.guiHandlerService.observableDiagram.subscribe( diagram => {
      this.diagram = diagram;
    });

    this.diagram = new go.Diagram("diagramID");
    this.diagram.initialAutoScale = Diagram.Uniform;
    this.diagram.allowZoom = true;
    this.diagram.toolManager.mouseWheelBehavior = go.ToolManager.WheelZoom;
    this.diagram.contentAlignment = go.Spot.Center;
    this.guiHandlerService.diagram = this.diagram;

  }

}
