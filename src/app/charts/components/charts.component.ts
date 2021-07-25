import { takeUntil } from 'rxjs/operators';
import { WEEKS_OF_ALLOCATION, STATES } from './../../models/charts-data';
import { Label } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ChartsDataService } from "../../services/charts-data.service";
import { Subject } from "rxjs";


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  unsubscibe$ = new Subject<void>();

  selectedState: string = '';
  selectedDate: string = '2021-06-21T00:00:00.000'
  weeksOfAllocation: string[] = WEEKS_OF_ALLOCATION;
  states: Label[] = STATES;

  constructor(private chartsDataService: ChartsDataService) { }

  ngOnInit(): void {
    this.fetchAllStateWeeklyDoseAllocation();
  }

  onStateChange(): void {
    console.log(this.selectedState);

    this.fetchWeeklyDoseAllocationByState();
  }

  onDateChange(): void {
    this.fetchAllStateWeeklyDoseAllocation();
    
    //if there is a state then updates the data of pie chart as well
    if (this.selectedState) {
      this.fetchWeeklyDoseAllocationByState();
    }
  }

  fetchAllStateWeeklyDoseAllocation(): void {
    this.chartsDataService
      .fetchAllStateWeeklyDoseAllocation(this.selectedDate)
      .pipe(takeUntil(this.unsubscibe$))
      .subscribe();
  }

  fetchWeeklyDoseAllocationByState(): void {
    this.chartsDataService.
      fetchWeeklyDoseAllocationByState(this.selectedDate, this.selectedState)
      .pipe(takeUntil(this.unsubscibe$))
      .subscribe();
  }


  //unsubscibe from subscriptions
  ngOnDestroy(): void {
    this.unsubscibe$.next();
    this.unsubscibe$.complete();
  }

}
