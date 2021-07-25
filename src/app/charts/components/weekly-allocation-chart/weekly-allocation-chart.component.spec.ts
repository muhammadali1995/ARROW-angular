import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WeeklyAllocationByStateChartComponent} from "../weekly-allocation-by-state-chart/weekly-allocation-by-state-chart.component";
import {ChartsDataService} from "../../../services/charts-data.service";
import {MaterialModule} from "../../../shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('WeeklyAllocationByStateChartComponent', () => {
  let component: WeeklyAllocationByStateChartComponent;
  let fixture: ComponentFixture<WeeklyAllocationByStateChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule],
      declarations: [
        WeeklyAllocationByStateChartComponent
      ],
      providers: [ChartsDataService]
    })

    fixture = TestBed.createComponent(WeeklyAllocationByStateChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
