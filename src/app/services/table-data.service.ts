import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const apiUrl = environment.api.tables;

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private  httpClient: HttpClient) {
  }
}
