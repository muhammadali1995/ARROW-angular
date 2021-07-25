import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../../shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsDataService } from "src/app/services/charts-data.service";
import { WeeklyAllocationByStateChartComponent } from "./weekly-allocation-by-state-chart.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";


describe('WeeklyAllocationByStateChartComponent', () => {
  let component: WeeklyAllocationByStateChartComponent;
  let fixture: ComponentFixture<WeeklyAllocationByStateChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        WeeklyAllocationByStateChartComponent
      ],
      providers: [
        ChartsDataService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(WeeklyAllocationByStateChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
