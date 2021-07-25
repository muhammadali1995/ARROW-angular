import { tap } from 'rxjs/operators';
import { UtilityService } from './utility.service';
import { Earthquake } from './../models/table-data';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";

const apiUrl = environment.api.tables;

@Injectable()
export class TableDataService {

  earthquakes$: BehaviorSubject<Earthquake[]> = new BehaviorSubject<Earthquake[]>([]);
  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService) { }

  fetchAll(magnitude?: number): Observable<Earthquake[]> {
    const url = this.utilityService.getAugmentedUrl(apiUrl, { magnitude: magnitude });
     return this.httpClient.get<Earthquake[]>(url)
      .pipe(tap((earthquakes: Earthquake[]) => this.earthquakes$.next(earthquakes)));
  }
}
