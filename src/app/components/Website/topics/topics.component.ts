import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
	selector: 'app-topics',
	templateUrl: './topics.component.html',
	styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
	allTopics: any[] = [];

	constructor(private topics: TopicService) {}

	ngOnInit(): void {
		this.topics.getTopics().subscribe((data) => {
			this.allTopics = data.data;
		});
	}

	getArticlesCount(modules: any[]): number {
		// Initialize a counter for articles
		let articleCount = 0;

		// Iterate through the modules and sum up the number of articles
		for (const module of modules) {
			articleCount += module.articles.length;
		}

		return articleCount;
	}
}
