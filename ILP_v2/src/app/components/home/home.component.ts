import { Router } from '@angular/router';
import { GuiHandlerService } from './../../services/gui-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private guiHandlerService: GuiHandlerService;
  private router: Router;

  public homeDisable: boolean;

  editing: boolean = true;
  executing: boolean = false;

  constructor(guiHandlerService: GuiHandlerService, router: Router){
      this.guiHandlerService = guiHandlerService;
      this.router = router;
  }

  ngOnInit() {

    this.guiHandlerService.observableEditing.subscribe(editingConfigs => {
      this.editing = editingConfigs;
    })

    this.guiHandlerService.observableExecuting.subscribe(executing => {
      this.executing = executing;
    })
  }


  saveConfiguration() {
    this.editing = false;
    this.guiHandlerService.editing = this.editing;
  }

  editConfiguration() {

    this.editing = true;
    this.guiHandlerService.editing = this.editing;
  }

  executeILP() {
    this.guiHandlerService.executeILP();
    this.router.navigate(['/simulation'])
  }

}
