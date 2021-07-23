import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UtilityService} from "./utility.service";
import {Subject} from "rxjs";
import {ChartsData, StateStats} from "../models/charts-data";
import {tap} from "rxjs/operators";
import {ChartDataSets} from "chart.js";

const apiUrl = environment.api.charts;

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  weeklyVaccineAllocationByStatesData$: Subject<ChartsData> = new Subject<ChartsData>();

  constructor(private  httpClient: HttpClient, private utilityService: UtilityService) {
  }

  fetchAllStateWeeklyDoseAllocation(week_of_allocations: string): void {
    const url: string = this.utilityService.getAugmentedUrl(apiUrl, {week_of_allocations: week_of_allocations});
    this.httpClient.get<StateStats[]>(url).pipe(tap((data) => {
      console.log(data);
      this.setWeeklyVaccineAllocationByStatesData(data);
    })).subscribe();
  }

  fetchWeeklyDoseAllocation(state: string) {
    return this.httpClient.get(apiUrl, {params: {state: state}});
  }

  setWeeklyVaccineAllocationByStatesData(stateStats: StateStats[]) {

    if (stateStats.length === 0) return;

    const labels: string [] = [];
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

    this.weeklyVaccineAllocationByStatesData$.next({dataset: dataSets, labels: labels});
  }
}
