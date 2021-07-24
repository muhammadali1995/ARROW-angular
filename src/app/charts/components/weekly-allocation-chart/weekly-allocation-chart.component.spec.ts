import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyAllocationByStateChartComponent } from "../weekly-allocation-by-start-chart/weekly-allocation-by-state-chart.component";


describe('WeeklyAllocationByStateChartComponent', () => {
  let component: WeeklyAllocationByStateChartComponent;
  let fixture: ComponentFixture<WeeklyAllocationByStateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyAllocationByStateChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAllocationByStateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});