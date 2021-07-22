import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablesRoutingModule} from "./tables-routing.module";
import {TablesComponent} from './components/tables.component';


@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule {
}
