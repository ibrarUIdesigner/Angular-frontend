import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
} from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		// return next.handle(request);

		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			}),
		);
	}
}
