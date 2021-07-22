import {Component, OnInit} from '@angular/core';
import {STATES} from "../../models/states";
import {ChartsDataService} from "../../services/charts-data.service";
import {StateStats} from "../../models/state-stats";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  selectedState: string = '';
  states: string [] = STATES;
  weeklyVaccineAllocationByStates: StateStats[];

  constructor(private chartsDataService: ChartsDataService) {
  }

  ngOnInit(): void {
    this.chartsDataService.fetchAllStateWeeklyDoseAllocation('2021-06-21T00:00:00.000').subscribe((stats: StateStats[]) => {
      this.weeklyVaccineAllocationByStates = stats;
    })
  }

  onStateChange() {
    console.log('change', this.selectedState);
  }

}
