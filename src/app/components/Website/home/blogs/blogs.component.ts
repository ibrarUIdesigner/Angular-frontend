import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
	allBlogs: any[] = [];

	constructor(private blogs: BlogsService) {}

	ngOnInit(): void {
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

	//* GET LATES 3 BLOGS
	getLatestBlogs() {
		return this.allBlogs.slice(-3);
	}

	// Array of specific colors
	colors = ['#FFEADA', '#FAFBCD', '#C2CCF9'];

	getColor(index: any) {
		return this.colors[index % this.colors.length];
	}

	getTextColor(backgroundColor: string) {
		const textColor = backgroundColor.slice(0, -2);
		return textColor;
	}
}
