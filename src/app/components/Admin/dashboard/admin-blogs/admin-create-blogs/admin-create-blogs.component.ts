import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { BlogsService } from 'src/app/services/blogs.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TagsService } from 'src/app/services/tags.service';

@Component({
	selector: 'app-admin-create-blogs',
	templateUrl: './admin-create-blogs.component.html',
	styleUrls: ['./admin-create-blogs.component.css'],
})
export class AdminCreateBlogsComponent implements OnInit {
	blogsForm!: FormGroup;
	blogSnap: any;
	allTags: any;

	editorContent: any = '';

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

	constructor(
		private toastr: ToastrService,
		private blogs: BlogsService,
		private tags: TagsService,
	) {}

	ngOnInit(): void {
		this.blogsForm = new FormGroup({
			title: new FormControl('', [Validators.required]),
			category: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			details: new FormControl('', [Validators.required]),
			tags: new FormControl([], [Validators.required]),
			blog_snaps: new FormControl('', [Validators.required]),
		});

		this.getTags();
	}

	//* BLOG IMAGE
	onSnaps(event: any) {
		this.blogSnap = event.target.files[0];
	}

	// * GET TAGS
	getTags() {
		this.tags.getTags().subscribe((data) => {
			this.allTags = data.data;
		});
	}

	// * CREATE BLOG
	createBlog() {
		console.log(this.blogsForm.value);
		let tagsArrasys: any = [];
		tagsArrasys.push(...this.blogsForm.value.tags);

		console.log(tagsArrasys);

		const formdata = new FormData();

		formdata.append('title', this.blogsForm.value.title),
			formdata.append('category', this.blogsForm.value.category),
			formdata.append('description', this.blogsForm.value.description),
			formdata.append('details', this.blogsForm.value.details),
			formdata.append('tags', JSON.stringify(tagsArrasys)),
			formdata.append('blog_snaps', this.blogSnap);

		// CALL API
		this.blogs.createBLogs(formdata).subscribe((next) => {
			this.toastr.success(next.status), this.blogsForm.reset();
		});
	}
}
