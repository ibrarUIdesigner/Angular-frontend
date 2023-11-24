import { Component, OnInit } from '@angular/core';
import { NgxIzitoastService } from 'ngx-izitoast';
import { Subject } from 'rxjs';
import { TagsService } from 'src/app/services/tags.service';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

	allTags: any[] = [];

	constructor(private tags: TagsService, private toastr: NgxIzitoastService) {}

	ngOnInit(): void {
		this.tags.getTags().subscribe((data) => {
			this.allTags = data.data;
			this.dtTrigger.next(event);
		});
	}

	deleteTag(event: Event, tag: any) {
		event.preventDefault();
		this.tags.deleteTags(tag._id).subscribe((data) => {
			this.allTags = this.allTags.filter((tags: any) => tags._id !== tag._id);
			this.toastr.success({ message: data.status });
		});
	}
}
