import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UtilityService} from "./utility.service";
import {Observable} from "rxjs";
import {StateStats} from "../models/state-stats";
import {map} from "rxjs/operators";

const apiUrl = environment.api.charts;

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  constructor(private  httpClient: HttpClient, private utilityService: UtilityService) {
  }

  fetchAllStateWeeklyDoseAllocation(week_of_allocations: string): Observable<StateStats[]> {
    const url: string = this.utilityService.getAugmentedUrl(apiUrl, {week_of_allocations: week_of_allocations});
  }

  fetchWeeklyDoseAllocation(state: string) {
    return this.httpClient.get(apiUrl, {params: {state: state}});
  }
}
