import { MaterialModule } from './../shared/material.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from "./tables-routing.module";
import { TablesComponent } from './components/tables.component';
import { EarthquakeTableComponent } from './components/earthquake-table/earthquake-table.component';

@NgModule({
  declarations: [
    TablesComponent,
    EarthquakeTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TablesRoutingModule
  ]
})
export class TablesModule {
}
