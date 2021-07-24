import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { BarChartData } from "src/app/models/charts-data";
import { ChartsDataService } from "src/app/services/charts-data.service";



@Component({
  selector: 'app-weekly-allocation-chart',
  templateUrl: './weekly-allocation-chart.component.html',
  styleUrls: ['./weekly-allocation-chart.component.scss']
})
export class WeeklyAllocationChartComponent {

  datasets: ChartDataSets[];
  barchartLabels: Label[] = [];

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  }

  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';

  constructor(public chartService: ChartsDataService) { }

}
