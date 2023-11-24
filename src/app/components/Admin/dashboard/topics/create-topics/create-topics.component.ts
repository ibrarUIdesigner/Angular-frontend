import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxIzitoastService } from 'ngx-izitoast';
import { ModulesService } from 'src/app/services/modules.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
	selector: 'app-create-topics',
	templateUrl: './create-topics.component.html',
	styleUrls: ['./create-topics.component.css'],
})
export class CreateTopicsComponent implements OnInit {
	topicsForm!: FormGroup;

	modules: any[] = [];

	constructor(
		private topics: TopicService,
		private toastr: NgxIzitoastService,
		private module: ModulesService,
	) {}

	ngOnInit(): void {
		this.getAllModules();
		this.topicsForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			icon: new FormControl('', [Validators.required]),
			modules: new FormControl('', [Validators.required]),
		});
	}

	//* GET ALL MODULES
	getAllModules() {
		this.module.getModules().subscribe((data) => {
			this.modules = data.data;
		});
	}

	//*CREATE TOPIC
	createTopic() {
		console.log('creating');
		if (!this.topicsForm.valid) {
			this.toastr.warning({ message: 'Please fill the form' });
			return;
		}
		this.topics.createTopics(this.topicsForm.value).subscribe((data) => {
			this.toastr.success({ message: data.status });
			this.topicsForm.reset();
		});
	}
}
