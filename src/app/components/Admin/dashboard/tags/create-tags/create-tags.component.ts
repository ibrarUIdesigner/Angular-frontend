import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxIzitoastService } from 'ngx-izitoast';
import { TagsService } from 'src/app/services/tags.service';

@Component({
	selector: 'app-create-tags',
	templateUrl: './create-tags.component.html',
	styleUrls: ['./create-tags.component.css'],
})
export class CreateTagsComponent implements OnInit {
	tagsForm!: FormGroup;

	constructor(private tags: TagsService, private toastr: NgxIzitoastService) {}

	ngOnInit(): void {
		this.tagsForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
		});
	}

	// * CREATE TAGS
	createTags() {
		console.log('creating Tags', this.tagsForm.value);
		this.tags.createTags(this.tagsForm.value).subscribe((data) => {
			this.toastr.success({ message: data.status });
			this.tagsForm.reset();
		});
	}
}
