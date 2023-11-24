import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxIzitoastService } from 'ngx-izitoast';
import { ModulesService } from 'src/app/services/modules.service';

@Component({
	selector: 'app-admin-blogs',
	templateUrl: './admin-blogs.component.html',
	styleUrls: ['./admin-blogs.component.css'],
})
export class AdminBlogsComponent implements OnInit {
	allBlogs: any[] = [];
	allModules: any[] = [];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();
	blogsForm!: FormGroup;
	blogsToModule!: FormGroup;
	closeModal: any = 0;

	blog: any;

	config: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '25rem',
		minHeight: '8rem',
		placeholder: 'Enter text here...',
		translate: 'no',
		defaultParagraphSeparator: 'p',
		defaultFontName: 'Arial',
	};
	blogSnap: any;

	constructor(
		private blogs: BlogsService,
		private toastr: NgxIzitoastService,
		private module: ModulesService,
	) {}

	ngOnInit(): void {
		this.getAllBlogs();
		this.blogsForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			category: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			details: new FormControl('', [Validators.required]),
			blog_snaps: new FormControl('', [Validators.required]),
		});

		this.blogsToModule = new FormGroup({
			id: new FormControl('', [Validators.required]),
		});
	}

	// * GET ALL BLOGs
	getAllBlogs() {
		this.blogs.getBlogs().subscribe((response) => {
			if (response.status === 'success') {
				this.allBlogs = response.data;
				this.getModules();
			}

			this.dtTrigger.next(event);
		});
	}

	//* GET BLOG DETAILS TO EMBED IN MODAL
	getBlog(event: any, blog: any) {
		event.preventDefault();
		this.blog = blog;
	}

	// * DELETE BLOG
	deleteBlog(event: any, blog: any) {
		event.preventDefault();
		this.allBlogs = this.allBlogs.filter((b: any) => b._id !== blog._id);
		this.blogs.deleteBlog(blog._id).subscribe((data) => {
			this.toastr.success(data.status);
		});
	}

	//* UPDATE BLOG
	updateBlog() {
		console.log('...updating');
		const formdata = new FormData();

		console.log(this.blogsForm.value);

		formdata.append('title', this.blogsForm.value.title),
			formdata.append('category', this.blogsForm.value.category),
			formdata.append('description', this.blogsForm.value.description),
			formdata.append('details', this.blogsForm.value.details),
			formdata.append('blog_snaps', this.blogSnap);
		this.blogs.updateBlog(this.blog._id, formdata).subscribe((data) => {
			this.toastr.success(data.status);
			this.closeModal++;
		});
	}

	// * UPDATE COVER
	onSnaps(event: any) {
		this.blogSnap = event.target.files[0];
	}

	//* GEL ALL MODULE
	getModules() {
		this.module.getModules().subscribe((data) => {
			this.allModules = data.data;
		});
	}

	//* SHIFT BLOGS TO MODULES
	shiftBlogsToModules() {
		console.log(this.blogsToModule.value);
		this.module
			.shiftArticleToModule(this.blog._id, this.blogsToModule.value)
			.subscribe((data) => {
				this.toastr.success({ message: data.status });
				this.closeModal++;
				this.blogsToModule.reset();
			});
	}
}
