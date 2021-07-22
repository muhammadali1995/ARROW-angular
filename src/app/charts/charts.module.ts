import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsRoutingModule} from "./charts-routing.module";
import {ChartsComponent} from "./components/charts.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../shared/material.module";
import { WeeklyAllocationByStateChartComponent } from './components/weekly-allocation-by-state-chart/weekly-allocation-by-state-chart.component';


@NgModule({
  declarations: [ChartsComponent, WeeklyAllocationByStateChartComponent],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule {
}
