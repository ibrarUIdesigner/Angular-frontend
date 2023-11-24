import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { NgxIzitoastService } from 'ngx-izitoast';
import { ModulesService } from 'src/app/services/modules.service';

@Component({
	selector: 'app-create-modules',
	templateUrl: './create-modules.component.html',
	styleUrls: ['./create-modules.component.css'],
})
export class CreateModulesComponent implements OnInit {
	allBlogs: any[] = [];

	moduleForm!: FormGroup;

	constructor(
		private blogs: BlogsService,
		private toastr: NgxIzitoastService,
		private module: ModulesService,
	) {}

	ngOnInit(): void {
		this.moduleForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			articles: new FormControl(''),
		});
		this.getAllBlogs();
	}

	// * GET ALL BLOGs
	getAllBlogs() {
		this.blogs.getBlogs().subscribe((response) => {
			if (response.status === 'success') {
				this.allBlogs = response.data;
			}
		});
	}

	//* CREATE MODULE
	createModule() {
		console.log(this.moduleForm.value);
		this.module.createModule(this.moduleForm.value).subscribe((data) => {
			this.toastr.success({ message: data.message });
			this.moduleForm.reset();
		});
	}
}
