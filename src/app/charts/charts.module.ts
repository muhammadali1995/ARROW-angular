import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from "./charts-routing.module";
import { ChartsComponent } from "./components/charts.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { WeeklyAllocationChartComponent } from './components/weekly-allocation-chart/weekly-allocation-chart.component';
import { WeeklyAllocationByStateChartComponent } from './components/weekly-allocation-by-start-chart/weekly-allocation-by-state-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ChartsComponent, 
    WeeklyAllocationChartComponent, 
    WeeklyAllocationByStateChartComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    ChartsRoutingModule
  ]
})
export class ChartModule {
}
