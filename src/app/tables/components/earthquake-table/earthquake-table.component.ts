import { TableDataService } from './../../../services/table-data.service';
import { Earthquake } from './../../../models/table-data';
import { Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.scss']
})
export class EarthquakeTableComponent implements OnInit {
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
    this.tableDataService.earthquakes$.subscribe((eq: Earthquake[]) => {
      this.dataSource.data = eq;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

