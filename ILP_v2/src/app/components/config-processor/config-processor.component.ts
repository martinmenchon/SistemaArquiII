import { ProcessorSettings } from './../../models/ProcessorSettings';
import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-processor',
  templateUrl: './config-processor.component.html',
  styleUrls: ['./config-processor.component.css']
})
export class ConfigProcessorComponent implements OnInit {

  private guiHandler: GuiHandlerService;


  range99: number[] = (new Array(99 - 1 + 1)).fill(undefined).map((_, i) => i + 1);

  processorSettings: ProcessorSettings = new ProcessorSettings();

  constructor(guiHandler: GuiHandlerService) {
    this.guiHandler = guiHandler;
  }

  ngOnInit() {
    this.guiHandler.observableProcessorSettings.subscribe(processorSettings => {
      this.processorSettings = processorSettings;
    });


    this.guiHandler.observableRequestPS.subscribe( foo => {
      this.updateProcessorSettings();
    })
  }

  updateProcessorSettings() {
    this.guiHandler.processorSettings = this.processorSettings;
  }

}
