import {TestBed} from '@angular/core/testing';

import {ErrorDialogService} from './error-dialog.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialModule} from "../shared/material.module";

describe('ErrorDialogService', () => {
  let service: ErrorDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [
        ErrorDialogService,
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        {provide: MatDialogRef, useValue: {}}
      ]
    });
    service = TestBed.inject(ErrorDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
