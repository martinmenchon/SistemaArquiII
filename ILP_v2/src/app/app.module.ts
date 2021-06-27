import { GuiHandlerService } from './services/gui-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInstructionComponent } from './components/add-instruction/add-instruction.component';
import { InstructionsTableComponent } from './components/instructions-table/instructions-table.component';
import { ConfigProcessorComponent } from './components/config-processor/config-processor.component';
import { GraphViewComponent } from './components/graph-view/graph-view.component';
import { SimulationTableViewComponent } from './components/simulation-table-view/simulation-table-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import { SimulationResultComponent } from './components/simulation-result/simulation-result.component';
import { LoadExamplesComponent } from './components/load-examples/load-examples.component';


@NgModule({
  declarations: [
    AppComponent,
    AddInstructionComponent,
    InstructionsTableComponent,
    ConfigProcessorComponent,
    GraphViewComponent,
    SimulationTableViewComponent,
    NavbarComponent,
    HomeComponent,
    SimulationComponent,
    SimulationResultComponent,
    LoadExamplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [GuiHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
