import { PieChartData } from './../models/charts-data';
import { Label, SingleDataSet } from 'ng2-charts';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UtilityService } from "./utility.service";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { BarChartData, StateStats } from "../models/charts-data";
import { tap } from "rxjs/operators";
import { ChartDataSets } from "chart.js";

const apiUrl = environment.api.charts;

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  weeklyVaccineAllocationData$: Subject<BarChartData> = new Subject<BarChartData>();
  weeklyVaccineAllocationByStateData$: Subject<PieChartData> = new Subject<PieChartData>();

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService) { }

  fetchAllStateWeeklyDoseAllocation(week_of_allocations: string): Observable<StateStats[]> {
    const url: string = this.utilityService.getAugmentedUrl(apiUrl, { week_of_allocations: week_of_allocations });
    return this.httpClient.get<StateStats[]>(url).pipe(tap((data) => {
      this.setWeeklyVaccineAllocationData(data);
    }));
  }

  fetchWeeklyDoseAllocationByState(week_of_allocations: string, state: string): Observable<StateStats[]> {
    return this.httpClient
      .get<StateStats[]>(apiUrl, { params: { jurisdiction: state, week_of_allocations: week_of_allocations } })
      .pipe(tap((data) => { this.setWeeklyVaccineAllocationByStateData(data) }));
  }

  setWeeklyVaccineAllocationByStateData(stateStats: StateStats[]) {
    const data = stateStats[0];
    const labels: Label[] = ['Dose 1', 'Dose 2'];
    const dataSets: SingleDataSet = [data._1st_dose_allocations, data._2nd_dose_allocations];
    this.weeklyVaccineAllocationByStateData$.next({ labels: labels, datasets: dataSets });
  }

  setWeeklyVaccineAllocationData(stateStats: StateStats[]): void {
    if (stateStats.length === 0) return;
    const labels: Label[] = [];
    const dataSets: ChartDataSets[] = [{
      data: [],
      label: '1st dose allocations'
    }, {
      data: [],
      label: '2nd dose allocations'
    }];
    stateStats.forEach((stats: StateStats) => {
      labels.push(stats.jurisdiction);
      dataSets[0].data?.push(stats._1st_dose_allocations);
      dataSets[1].data?.push(stats._2nd_dose_allocations);
    });
    this.weeklyVaccineAllocationData$.next({ datasets: dataSets, labels: labels });
  }
}
