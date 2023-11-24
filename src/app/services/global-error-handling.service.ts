import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxIzitoastService } from 'ngx-izitoast';

@Injectable({
	providedIn: 'root',
})
export class GlobalErrorHandlingService implements ErrorHandler {
	constructor(
		private errorService: ErrorService,
		public iziToast: NgxIzitoastService,
	) {
		iziToast.settings({
			position: 'topRight', // Configure the default position
		});
	}

	handleError(error: any): void {
		console.log(error);
		//* SERVER ERROR
		if (error instanceof HttpErrorResponse) {
			let message = this.errorService.getServerMessage(error);
			let trace = this.errorService.getServerStack(error);
			this.iziToast.error({ message });
		} else {
			//* CLIENT ERROR
			let message: any = this.errorService.getClientMessage(error);
			this.iziToast.error({ message });
		}
	}
}
