import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
	selector: 'app-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
	constructor(private analytic: BlogsService) {}
	colors = ['#C5D5FD', '#F5CDFF', '#A5E7F5', '#FDE3E7'];
	analytics: [] = [];
	ngOnInit(): void {
		this.getAnalytics();
	}

	getBGColor(index: any) {
		return this.colors[index % this.colors.length];
	}

	getAnalytics() {
		this.analytic.getAnalytics().subscribe((next) => {
			this.analytics = next.data;
		});
	}
}
