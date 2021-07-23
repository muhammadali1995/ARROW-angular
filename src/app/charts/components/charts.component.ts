import { WEEKS_OF_ALLOCATION, PieChartData } from './../../models/charts-data';
import { Label } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { BarChartData } from "src/app/models/charts-data";
import { ChartsDataService } from "../../services/charts-data.service";


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  selectedState: string = '';
  selectedDate: string = '2021-06-21T00:00:00.000'
  weeklyVaccineAllocation: BarChartData;
  weeklyVaccineAllocationByState: PieChartData;
  weeksOfAllocation = WEEKS_OF_ALLOCATION;
  states: Label[];

  constructor(private chartsDataService: ChartsDataService) {
  }

  ngOnInit(): void {
    this.chartsDataService.fetchAllStateWeeklyDoseAllocation(this.selectedDate);

    this.chartsDataService.weeklyVaccineAllocationData$.subscribe((data: BarChartData) => {
      this.weeklyVaccineAllocation = data;
    });

    this.chartsDataService.states$.subscribe(states => this.states = states);

    this.chartsDataService.weeklyVaccineAllocationByStateData$.subscribe((data: PieChartData) => {
      console.log(data);
      this.weeklyVaccineAllocationByState = data;
    })
  }

  onStateChange(): void {
    this.chartsDataService.fetchWeeklyDoseAllocationByState(this.selectedDate, this.selectedState);
  }


  onDateChange(): void {
    this.chartsDataService.fetchAllStateWeeklyDoseAllocation(this.selectedDate);
    this.chartsDataService.fetchWeeklyDoseAllocationByState(this.selectedDate, this.selectedState);
  }
}
