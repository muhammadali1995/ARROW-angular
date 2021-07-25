import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableDataService} from "src/app/services/table-data.service";
import {MaterialModule} from "src/app/shared/material.module";

import {TablesComponent} from './tables.component';
import {EarthquakeTableComponent} from "./earthquake-table/earthquake-table.component";

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule
      ],
      declarations: [
        TablesComponent,
        EarthquakeTableComponent],
      providers: [TableDataService]
    })

    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
