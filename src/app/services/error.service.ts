import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ErrorService {
	constructor() {}

	getClientMessage(error: Error) {
		if (!navigator.onLine) {
			return 'No Internet Connection';
		}

		return error.message ? error.message : error.toString();
	}

	getClientStack(error: Error) {
		return error.stack;
	}

	getServerMessage(error: HttpErrorResponse): string {
		return error.error.message;
	}

	getServerStack(error: HttpErrorResponse) {
		return error;
	}
}
