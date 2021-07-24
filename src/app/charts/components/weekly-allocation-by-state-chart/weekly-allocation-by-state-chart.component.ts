import { Label, SingleDataSet } from 'ng2-charts';
import { PieChartData } from './../../../models/charts-data';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from "chart.js";
import { ChartsDataService } from "src/app/services/charts-data.service";

@Component({
  selector: 'app-weekly-allocation-by-start-chart',
  templateUrl: './weekly-allocation-by-start-chart.component.html',
  styleUrls: ['./weekly-allocation-by-start-chart.component.scss']
})
export class WeeklyAllocationByStateChartComponent {
  labels: Label[];
  datasets: SingleDataSet;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  constructor(public chartService: ChartsDataService) { }
}
