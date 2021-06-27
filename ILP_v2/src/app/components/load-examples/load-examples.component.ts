import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-examples',
  templateUrl: './load-examples.component.html',
  styleUrls: ['./load-examples.component.css']
})
export class LoadExamplesComponent implements OnInit {

  private guiHandlerService: GuiHandlerService;

  constructor(guiHandlerService: GuiHandlerService) { 
    this.guiHandlerService = guiHandlerService;
  }

  ngOnInit() {
  }


  public loadExample1(){
    this.guiHandlerService.loadExample1();
  }

  public loadExample2(){
    this.guiHandlerService.loadExample2();
  }

  public loadExample3(){
    this.guiHandlerService.loadExample3();
  }

}
