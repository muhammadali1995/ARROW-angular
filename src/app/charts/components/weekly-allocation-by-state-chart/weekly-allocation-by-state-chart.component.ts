import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto'


@Component({
  selector: 'app-weekly-allocation-by-state-chart',
  templateUrl: './weekly-allocation-by-state-chart.component.html',
  styleUrls: ['./weekly-allocation-by-state-chart.component.scss']
})
export class WeeklyAllocationByStateChartComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') private barCanvas!: ElementRef;
  barChart: any;
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Weekly vaccine allocation by states'
          }
        }
      }
    })
  }

}
