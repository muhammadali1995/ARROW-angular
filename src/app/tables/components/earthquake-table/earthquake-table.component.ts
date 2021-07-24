import { Subject } from 'rxjs';
import { TableDataService } from './../../../services/table-data.service';
import { Earthquake } from './../../../models/table-data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.scss']
})
export class EarthquakeTableComponent implements OnInit {

  private unsubscibes$ = new Subject<void>();

  dataSource: MatTableDataSource<Earthquake> = new MatTableDataSource<Earthquake>();
  displayedColumns: string[] = [
    'source',
    'earthquake_id',
    'magnitude',
    'region',
    'depth',
    'number_of_stations'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private tableDataService: TableDataService) { }

  ngOnInit(): void {
    this.tableDataService.earthquakes$
      .pipe(takeUntil(this.unsubscibes$))
      .subscribe((eq: Earthquake[]) => {
        this.dataSource.data = eq;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  //unsubscibe fro subscriptions
  ngOnDestroy(): void {
    this.unsubscibes$.next();
    this.unsubscibes$.complete();
  }
}

