import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {TableDataService} from './table-data.service';
import {UtilityService} from "./utility.service";
import {take} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {earthquakeDataFactory} from "../../test-stubs/table";

describe('TableDataService', () => {
  let service: TableDataService;
  let utilityService: UtilityService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TableDataService
      ]
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDataService);
    utilityService = TestBed.inject(UtilityService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchAll', () => {
    const params = {
      magnitude: 4
    };

    it('should request for all earthquake data', () => {
      service
          .fetchAll()
          .pipe(take(1))
          .subscribe();
      const url = utilityService.getAugmentedUrl(environment.api.tables);
      const request = httpMock.expectOne(url);
      expect(request.request.method).toEqual('GET');
    });

    it('should request for all earthquakes with magnitude 4', () => {
      let earthquakes = earthquakeDataFactory.buildList(10);
      service
          .fetchAll(params.magnitude)
          .pipe(take(1))
          .subscribe(earthquakes => {
            expect(earthquakes[0].magnitude).toEqual(4)
          });

      const url = utilityService.getAugmentedUrl(environment.api.tables, params);
      const request = httpMock.expectOne(url);
      expect(request.request.method).toEqual('GET');
      request.flush(earthquakes);
    });

    it('should call earthquakes$ next when earthquake data is fetched', () => {
      const data = earthquakeDataFactory.buildList(2);
      service.fetchAll()
          .pipe(take(1))
          .subscribe((earthquakes) => service.earthquakes$.next(earthquakes));
      const url = utilityService.getAugmentedUrl(environment.api.tables);
      const request = httpMock.expectOne(url);
      request.flush(data);
      expect(request.request.method).toEqual('GET');
      expect(service.earthquakes$.getValue()).toEqual(data)
    });
  });

});
