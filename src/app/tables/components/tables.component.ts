import {MAGNITUDES} from '../../models/table-data';
import {TableDataService} from '../../services/table-data.service';
import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public selectedMagnitude: number;
  public magnitudes = MAGNITUDES;
  unsubscribe$ = new Subject<void>();

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.fetchEarthQuakes();
  }

  onMagnitudeChange() {
    this.fetchEarthQuakes();
  }

  fetchEarthQuakes() {
    this.tableDataService
        .fetchAll(this.selectedMagnitude)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe();
  }

  // unsubscribe from subscriptions
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
