import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';

@Component({
	selector: 'app-web-topic-moudles',
	templateUrl: './web-topic-moudles.component.html',
	styleUrls: ['./web-topic-moudles.component.css'],
})
export class WebTopicMoudlesComponent implements OnInit {
	articlesByModules: any;
	id: any;

	constructor(private topic: TopicService, private route: ActivatedRoute) {}
	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params['id'];
			this.getTopicDetails();
		});
	}

	getTopicDetails() {
		this.topic.getTopicDetails(this.id).subscribe((data) => {
			this.articlesByModules = data.data;
		});
	}
}
