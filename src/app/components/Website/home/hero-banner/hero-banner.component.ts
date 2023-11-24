import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero-banner',
	templateUrl: './hero-banner.component.html',
	styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent implements OnInit {
	currentKeyword: string = 'web design';
	keywords: string[] = [
		'coder',
		'developer',
		'programmer',
		'designer',
		'player',
	];
	currentIndex = 0;

	colors = ['#667EEA', '#FF5973', '#FFCA28', '#00CF7F', '#001E36'];

	ngOnInit(): void {
		this.currentIndex = 0;
		setInterval(() => {
			this.currentIndex = (this.currentIndex + 1) % this.keywords.length;
			this.currentKeyword = this.keywords[this.currentIndex];
		}, 1500);
	}

	getColor() {
		return this.colors[this.currentIndex % this.colors.length];
	}
}
