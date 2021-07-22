import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  getAugmentedUrl(url: string, queryParams: any = {}): string { // eslint-disable-line
    const queryVals = Object.keys(queryParams)
        .filter((k) => {
          const value = queryParams[k];
          return value !== undefined && value !== null && value.toString() !== '';
        })
        .map((k) => k.concat('=', queryParams[k]));
    return queryVals.length === 0 ? url : url + '?' + queryVals.join('&');
  }
}
