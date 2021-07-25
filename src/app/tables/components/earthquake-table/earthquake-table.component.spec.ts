import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../shared/material.module';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableDataService} from "src/app/services/table-data.service";
import {EarthquakeTableComponent} from './earthquake-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EarthquakeTableComponent', () => {
  let component: EarthquakeTableComponent;
  let fixture: ComponentFixture<EarthquakeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [EarthquakeTableComponent],
      providers: [TableDataService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
