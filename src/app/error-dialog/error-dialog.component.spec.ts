import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorDialogComponent} from './error-dialog.component';
import {MaterialModule} from "../shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorDialogService} from "../services/error-dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ErrorDialogComponent],
      providers: [
        ErrorDialogService, {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        {provide: MatDialogRef, useValue: {}}
      ]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
