import {Component, OnInit} from '@angular/core';
import {ChartsDataService} from "../../services/charts-data.service";
import {ChartsData} from "../../models/charts-data";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  selectedState: string = '';
  weeklyVaccineAllocationByStates: ChartsData;
  states: string[];

  constructor(private chartsDataService: ChartsDataService) {
  }

  ngOnInit(): void {
    this.chartsDataService.fetchAllStateWeeklyDoseAllocation('2021-06-21T00:00:00.000');

    this.chartsDataService.weeklyVaccineAllocationByStatesData$.subscribe((data: ChartsData) => {
      this.weeklyVaccineAllocationByStates = data;
    })
  }

  onStateChange() {
    console.log('change', this.selectedState);
  }

}
