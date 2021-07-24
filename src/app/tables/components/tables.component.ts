import { MAGNITUDES, Earthquake } from './../../models/table-data';
import { TableDataService } from './../../services/table-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public selectedMagnitude: number;
  public maginutudes = MAGNITUDES;
  earthquakes: Earthquake[];

  constructor(private tableDataService: TableDataService) { }

  ngOnInit(): void {
    this.fetchEathQuakes();
  }

  onMaginitudeChange() {
    this.fetchEathQuakes();
  }

  fetchEathQuakes() {
    this.tableDataService
      .fetchAll(this.selectedMagnitude);
  }

}
