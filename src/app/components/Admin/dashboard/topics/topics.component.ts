import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxIzitoastService } from 'ngx-izitoast';
import { Subject } from 'rxjs';
import { TopicService } from 'src/app/services/topic.service';

@Component({
	selector: 'app-topics',
	templateUrl: './topics.component.html',
	styleUrls: ['./topics.component.css'],
})
export class AdminTopicsComponent implements OnInit {
	topics: any[] = [];

	closeModal: any = 0;
	singleTopic: any;

	topicForm!: FormGroup;

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();
	constructor(
		private topic: TopicService,
		private toastr: NgxIzitoastService,
	) {}
	ngOnInit(): void {
		this.getTopics();

		this.topicForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
		});
	}

	//* GET ALL TOPIC
	getTopics() {
		this.topic.getTopics().subscribe((data) => {
			this.topics = data.data;
			this.dtTrigger.next(event);
		});
	}

	// * GET SINGLE TOPIC
	getTopic(topic: any) {
		this.singleTopic = topic;
	}

	// * UPDATE TOPIC
	updateTopic() {
		this.topic
			.updateTopic(this.singleTopic._id, this.topicForm.value)
			.subscribe((data) => {
				this.toastr.success({ message: data.status });
				this.closeModal++;
			});
	}

	//* DELTET TOPIC
	deleteTopic(topic: any) {
		console.log(topic);
		this.topic.deleteTopic(topic._id).subscribe((data) => {
			this.toastr.success({ message: 'success' });
			this.topics = this.topics.filter((top: any) => top._id !== topic._id);
		});
	}
}
