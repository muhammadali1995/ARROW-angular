import { Earthquake } from './../models/table-data';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from "rxjs";

const apiUrl = environment.api.tables;

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private  httpClient: HttpClient) {
  }

  fetchAll(): Observable<Earthquake[]>{
    return this.httpClient.get<Earthquake[]>(apiUrl);
  }
}
