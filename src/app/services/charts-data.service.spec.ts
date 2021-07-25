import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {ChartsDataService} from './charts-data.service';
import {UtilityService} from "./utility.service";
import {environment} from "../../environments/environment";
import {take} from "rxjs/operators";
import {barchartDataFactory} from "../../test-stubs/chart";
import {StateStats} from "../models/charts-data";

describe('ChartsDataService', () => {
  let service: ChartsDataService;
  let utilityService: UtilityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChartsDataService]
    });
    service = TestBed.inject(ChartsDataService);
    utilityService = TestBed.inject(UtilityService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('fetchAllStateWeeklyDoseAllocation', () => {
    const params = {
      week_of_allocations: '2021-06-21T00:00:00.000',
    };

    it('should request for  all state weekly dose allocation data', () => {
      service
          .fetchAllStateWeeklyDoseAllocation(params.week_of_allocations)
          .pipe(take(1))
          .subscribe();
      const url = utilityService.getAugmentedUrl(environment.api.charts, params);
      const request = httpMock.expectOne(url);
      expect(request.request.method).toEqual('GET');
    });

    it('should call setWeeklyVaccineAllocationData on success', () => {
      spyOn(service, 'setWeeklyVaccineAllocationData');
      service.fetchAllStateWeeklyDoseAllocation(params.week_of_allocations)
          .pipe(take(1))
          .subscribe(() => expect(service.setWeeklyVaccineAllocationData).toHaveBeenCalledTimes(1));
      const url = utilityService.getAugmentedUrl(environment.api.charts, params);
      const request = httpMock.expectOne(url);
      request.flush(barchartDataFactory.buildList(2));
      expect(request.request.method).toEqual('GET');
    });

    it('should not call setWeeklyVaccineAllocationData on error', () => {
      spyOn(service, 'setWeeklyVaccineAllocationData');

      service.fetchAllStateWeeklyDoseAllocation('1')
          .subscribe(
              () => expect(service.setWeeklyVaccineAllocationData).toHaveBeenCalledTimes(1),
              error => expect(error.status).toEqual(400));

      const url = utilityService.getAugmentedUrl(environment.api.charts, {week_of_allocations: '1'});
      const request = httpMock.expectOne(url);
      request.flush([], {status: 400, statusText: 'Invalid SoQL query'});
    });
  })

  describe('fetchWeeklyDoseAllocationByState', () => {
    const params = {
      jurisdiction: 'Washington',
      week_of_allocations: '2021-06-21T00:00:00.000'
    };

    it('should request for WeeklyDoseAllocation data by state', () => {
      service
          .fetchWeeklyDoseAllocationByState(params.week_of_allocations, params.jurisdiction)
          .pipe(take(1))
          .subscribe();

      const url = utilityService.getAugmentedUrl(environment.api.charts, params);
      const request = httpMock.expectOne(url);
      expect(request.request.method).toEqual('GET');
    });


    it('should call setWeeklyVaccineAllocationByStateData on success', () => {
      spyOn(service, 'setWeeklyVaccineAllocationByStateData');

      service.fetchWeeklyDoseAllocationByState(params.week_of_allocations, params.jurisdiction)
          .pipe(take(1))
          .subscribe(() => expect(service.setWeeklyVaccineAllocationByStateData).toHaveBeenCalledTimes(1));
      const url = utilityService.getAugmentedUrl(environment.api.charts, params);
      const request = httpMock.expectOne(url);
      request.flush(barchartDataFactory.build());
      expect(request.request.method).toEqual('GET');
    });

    it('should return an Observable<StateStats>', () => {
      const stateStats = barchartDataFactory.buildList(1);
      service.fetchWeeklyDoseAllocationByState(params.week_of_allocations, params.jurisdiction)
          .subscribe(data => {
            expect(data.length).toEqual(1);
            expect(data).toEqual(stateStats);
          })

      const url = utilityService.getAugmentedUrl(environment.api.charts, params);
      const request = httpMock.expectOne(url);
      request.flush(stateStats);
      expect(request.request.method).toEqual('GET');
    });

    it('should not call setWeeklyVaccineAllocationByStateData on error', () => {
      spyOn(service, 'setWeeklyVaccineAllocationByStateData');

      service.fetchWeeklyDoseAllocationByState('1', 'tashkent')
          .subscribe(
              () => expect(service.setWeeklyVaccineAllocationByStateData).toHaveBeenCalledTimes(1),
              error => expect(error.status).toEqual(400));

      const url = utilityService.getAugmentedUrl(environment.api.charts, {
        jurisdiction: 'tashkent',
        week_of_allocations: '1'
      });
      const request = httpMock.expectOne(url);
      request.flush([], {status: 400, statusText: 'Invalid SoQL query'});
    });

  });

  describe('setWeeklyVaccineAllocationData', () => {
    it('should call weeklyVaccineAllocationData$ when there is data', () => {
      const data = barchartDataFactory.buildList(1);
      spyOn(service.weeklyVaccineAllocationData$, 'next');

      service.setWeeklyVaccineAllocationData(data);

      expect(service.weeklyVaccineAllocationData$.next).toHaveBeenCalled();
    });

    it('should not call weeklyVaccineAllocationData$ next when there is no data', () => {
      spyOn(service.weeklyVaccineAllocationData$, 'next');
      const stateStats: StateStats [] = [];

      service.setWeeklyVaccineAllocationData(stateStats);

      expect(service.weeklyVaccineAllocationData$.next).not.toHaveBeenCalled();
    });
  })

});
