import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModulesService } from 'src/app/services/modules.service';
import { TopicService } from 'src/app/services/topic.service';
import { NgxIzitoastService } from 'ngx-izitoast';

@Component({
	selector: 'app-admin-modules',
	templateUrl: './admin-modules.component.html',
	styleUrls: ['./admin-modules.component.css'],
})
export class AdminModulesComponent implements OnInit {
	modules: any[] = [];
	topics: any[] = [];
	moduleId: any;

	moduleForm!: FormGroup;

	moduleToTopicForm!: FormGroup;
	closeModal: any = 0;

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

	constructor(
		private module: ModulesService,
		private topic: TopicService,
		private toastr: NgxIzitoastService,
	) {}

	ngOnInit(): void {
		this.getAllModules();
		this.getTopics();
		this.moduleToTopicForm = new FormGroup({
			id: new FormControl('', [Validators.required]),
		});

		this.moduleForm = new FormGroup({
			title: new FormControl(''),
		});
	}

	//* GET ALL MODULES
	getAllModules() {
		this.module.getModules().subscribe((data) => {
			this.modules = data.data;
			this.dtTrigger.next(event);
		});
	}

	//* GET ALL TOPIC
	getTopics() {
		this.topic.getTopics().subscribe((data) => {
			this.topics = data.data;
		});
	}

	// * GET MODULE
	getModule(module: any) {
		this.moduleId = module;
	}

	//* SHIF MODULE TO TOPIC
	shiftModuleToTopic() {
		console.log(this.moduleToTopicForm.value);
		this.module
			.moduleToTopic(this.moduleId._id, this.moduleToTopicForm.value)
			.subscribe((data) => {
				this.closeModal++;
				this.toastr.success({ message: data.status });
				this.moduleToTopicForm.reset();
			});
	}

	//* DELETE MODULE
	deleteModule(module: any) {
		this.module.deleteModule(module._id).subscribe((data) => {
			this.modules = this.modules.filter((mod: any) => mod._id !== module._id);
			this.toastr.success({ message: data.status });
		});
	}

	//* UPDATE MODULE
	updateModule() {
		console.log(this.moduleForm.value);
		this.module
			.updateModule(this.moduleId._id, this.moduleForm.value)
			.subscribe((data) => {
				this.toastr.success({ message: data.status });
				this.closeModal++;
			});
	}
}
