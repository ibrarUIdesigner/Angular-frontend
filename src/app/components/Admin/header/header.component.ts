import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	url: any;

	constructor(private router: Router) {
		this.url = this.router.url.split('/')[2];
		console.log(this.url);
	}
}
