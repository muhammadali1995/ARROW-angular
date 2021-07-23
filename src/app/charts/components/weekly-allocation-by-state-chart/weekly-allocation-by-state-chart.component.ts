import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";



@Component({
  selector: 'app-weekly-allocation-by-state-chart',
  templateUrl: './weekly-allocation-by-state-chart.component.html',
  styleUrls: ['./weekly-allocation-by-state-chart.component.scss']
})
export class WeeklyAllocationByStateChartComponent implements OnInit, AfterViewInit {


  @Input() dataSets: ChartDataSets;

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

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dataSets);
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
  }

}
