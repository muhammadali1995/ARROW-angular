import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ErrorDialogService} from "../error-dialog.service";
import {HttpError} from "../../models/error";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorDialogService: ErrorDialogService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          let data: HttpError = {
            message: error && error.error && error.error.message ? error.error.message : '',
            status: error.status
          };
          this.errorDialogService.openDialog(data);
          return throwError(error);
        }));
  }
}
