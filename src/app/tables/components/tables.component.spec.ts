import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableDataService} from "src/app/services/table-data.service";
import {MaterialModule} from "src/app/shared/material.module";

import {TablesComponent} from './tables.component';
import {EarthquakeTableComponent} from "./earthquake-table/earthquake-table.component";
import {earthquakeDataFactory} from "../../../test-stubs/table";
import {of} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;
  let tableDataService: TableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        TablesComponent,
        EarthquakeTableComponent],
      providers: [TableDataService]
    })

    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    tableDataService = TestBed.inject(TableDataService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should fetch earthquakes', () => {
      const data = earthquakeDataFactory.buildList(2);
      spyOn(tableDataService, 'fetchAll').and.returnValue(of(data));
      spyOn(component, 'fetchEarthQuakes');

      component.ngOnInit();

      expect(component.fetchEarthQuakes).toHaveBeenCalledTimes(1);
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe on destroy', () => {
      spyOn(component.unsubscribe$, 'next').and.callThrough();
      spyOn(component.unsubscribe$, 'complete').and.callThrough();

      component.ngOnDestroy();

      expect(component.unsubscribe$.next).toHaveBeenCalledOnceWith();
      expect(component.unsubscribe$.complete).toHaveBeenCalledOnceWith();
    });
  }); // describe - ngOnDestroy()
});
