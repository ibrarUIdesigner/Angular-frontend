import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-admin-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class AdminProjectsComponent implements OnInit {
	allprojects: any[] = [];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

	projectForm!: FormGroup;
	projectSnaps: any;

	singleProject: any;
	closeModal: any = 0;

	constructor(
		private projects: ProjectsService,
		private toastr: ToastrService,
	) {}

	ngOnInit(): void {
		this.projects.getAllProjects().subscribe((data) => {
			this.allprojects = data.data;
			this.dtTrigger.next(event);
		});

		this.projectForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			url: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			snaps: new FormControl('', [Validators.required]),
		});
	}

	deleteProject(event: any, project: any) {
		event.preventDefault();
		console.log(project);

		this.projects.deletProject(project._id).subscribe((data) => {
			this.allprojects = this.allprojects.filter(
				(proj: any) => proj._id !== project._id,
			);
			this.toastr.success(data.status);
		});
	}

	// * GET SINGLE PROJECT
	getSingleProject(project: any) {
		this.singleProject = project;
	}

	// * TAKE SNAPS
	onSnaps(event: any) {
		this.projectSnaps = event.target.files[0];
	}

	//* UPDATE PROJECT
	updateProject() {
		console.log('updating');
		const formdata = new FormData();

		formdata.append('title', this.projectForm.value.title),
			formdata.append('url', this.projectForm.value.url),
			formdata.append('description', this.projectForm.value.description),
			formdata.append('snaps', this.projectSnaps),
			this.projects
				.updateProject(this.singleProject._id, formdata)
				.subscribe((data) => {
					this.closeModal++;
				});
	}
}
