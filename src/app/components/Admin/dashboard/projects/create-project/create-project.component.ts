import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-create-project',
	templateUrl: './create-project.component.html',
	styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
	projectForm!: FormGroup;
	projectSnaps: any;

	constructor(
		private projects: ProjectsService,
		private toastr: ToastrService,
	) {}

	ngOnInit(): void {
		this.projectForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			url: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			snaps: new FormControl('', [Validators.required]),
		});
	}

	// * TAKE SNAPS
	onSnaps(event: any) {
		this.projectSnaps = event.target.files[0];
	}

	//* CREATE PROJECT
	createProject() {
		//  Call Api

		// Form Data;
		const formdata = new FormData();

		formdata.append('title', this.projectForm.value.title),
			formdata.append('url', this.projectForm.value.url),
			formdata.append('description', this.projectForm.value.description),
			formdata.append('snaps', this.projectSnaps),
			this.projects.createProjects(formdata).subscribe((data) => {
				this.toastr.success(data.status);
				this.projectForm.reset();
			});
	}
}
