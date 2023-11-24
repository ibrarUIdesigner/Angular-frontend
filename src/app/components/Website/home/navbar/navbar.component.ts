import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
	menu = [
		{
			icon: ' fa-briefcase',
			name: 'Topics',
			routerLink: '/topics',
		},
		{
			icon: ' fa-chalkboard',
			name: 'Articles',
			routerLink: '/articles',
		},
		// {
		// 	icon: 'fa-city',
		// 	name: 'Skills',
		// 	routerLink: '/skills',
		// },

		{
			icon: 'fa-pen-clip',
			name: 'Be a writer',
			routerLink: '/skills',
		},
	];
}
