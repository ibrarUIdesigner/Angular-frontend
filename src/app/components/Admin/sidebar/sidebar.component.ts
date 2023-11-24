import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
	sidemenu = [
		{
			name: 'Dashboard',
			icon: 'bi-speedometer',
			routerLink: 'analytics',
		},
		{
			name: 'Projects',
			icon: 'bi-cast',
			routerLink: 'projects',
		},
		{
			name: 'Blogs',
			icon: 'bi-credit-card-2-front',
			routerLink: 'blogs',
		},
		{
			name: 'Socials',
			icon: 'bi-person-badge',
			routerLink: 'socials',
		},

		{
			name: 'Tags',
			icon: 'fa-tags',
			routerLink: 'tags',
		},

		{
			name: 'Topics',
			icon: 'bi-pie-chart',
			routerLink: 'topics',
		},

		{
			name: 'Modules',
			icon: 'bi-pie-chart',
			routerLink: 'modules',
		},
	];
}
