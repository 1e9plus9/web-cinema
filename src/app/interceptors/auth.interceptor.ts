import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import {catchError} from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authRequest = request;
    const token = this.token.getToken();
    if (token != null) {
      authRequest = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'JWT ' + token) });
    }
    return next.handle(authRequest).pipe(
      catchError(
        (err, caught) => {
          if (err.status === 401) {
            this.handleError();
            return of(err);
          }
          throw err;
        }
      )
    );
  }
  handleError(): void {
    this.token.signOut();
    window.location.reload();
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
