import { PieChartData } from '../../../models/charts-data';
import { BarChartData } from 'src/app/models/charts-data';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-weekly-allocation-by-start-chart',
  templateUrl: './weekly-allocation-by-start-chart.component.html',
  styleUrls: ['./weekly-allocation-by-start-chart.component.scss']
})
export class WeeklyAllocationByStateChartComponent {
  @Input() data: PieChartData;
 
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
}
