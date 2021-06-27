import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SimulationComponent } from './components/simulation/simulation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simulation', component: SimulationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
