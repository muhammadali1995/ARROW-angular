import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";
import {HttpError} from "../models/error";

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  public isDialogOpen: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  openDialog(error: HttpError): any {
    if (this.isDialogOpen) return false;

    this.isDialogOpen = true;

    const dialogRef = this.dialog.open(ErrorDialogComponent, {data: error});

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }
}
