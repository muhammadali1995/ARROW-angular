import {WeeklyAllocationChartComponent} from './weekly-allocation-chart/weekly-allocation-chart.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material.module';
import {ChartsDataService} from '../../services/charts-data.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChartsComponent} from './charts.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WeeklyAllocationByStateChartComponent} from "./weekly-allocation-by-state-chart/weekly-allocation-by-state-chart.component";
import {DebugElement, Type} from "@angular/core";

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;
  let chartDataService: ChartsDataService;
  let debugElement: DebugElement;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule
      ],
      declarations: [
        ChartsComponent,
        WeeklyAllocationChartComponent,
        WeeklyAllocationByStateChartComponent
      ],
      providers: [ChartsDataService]
    });

    chartDataService = TestBed.inject(ChartsDataService);
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('ngOnDestroy()', () => {
    it('should unsubscribe on destroy', () => {
      spyOn(component.unsubscribe$, 'next').and.callThrough();
      spyOn(component.unsubscribe$, 'complete').and.callThrough();

      component.ngOnDestroy();

      expect(component.unsubscribe$.next).toHaveBeenCalledOnceWith();
      expect(component.unsubscribe$.complete).toHaveBeenCalledOnceWith();
    });
  }); // describe - ngOnDestroy()

  describe('fetchAllStateWeeklyDoseAllocation', () => {
    it('should class request for weekly doses allocation for selected date', () => {
      spyOn(chartDataService, 'fetchAllStateWeeklyDoseAllocation').and.returnValue(of());
      component.selectedDate = '2021-06-21T00:00:00.000';

      component.fetchAllStateWeeklyDoseAllocation();

      expect(chartDataService.fetchAllStateWeeklyDoseAllocation).toHaveBeenCalledWith('2021-06-21T00:00:00.000');
    });
  });

  describe('fetchWeeklyDoseAllocationByState', () => {
    it('should request for weekly doses allocation data for a date and state', () => {
      const selectedState = 'New York';
      const selectedDate = '2021-06-21T00:00:00.000';
      component.selectedState = selectedState;
      spyOn(chartDataService, 'fetchWeeklyDoseAllocationByState').and.returnValue(of());

      fixture.detectChanges();
      component.fetchWeeklyDoseAllocationByState();

      expect(chartDataService.fetchWeeklyDoseAllocationByState).toHaveBeenCalledWith(selectedDate, selectedState);
    })
  });

});
