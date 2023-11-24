import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
	selector: 'app-all-blogs',
	templateUrl: './all-blogs.component.html',
	styleUrls: ['./all-blogs.component.css'],
})
export class AllBlogsComponent implements OnInit {
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

	// * COLORS
	colors = ['#667eea2a'];

	getBGcolor(index: any) {
		return this.colors[index % this.colors.length];
	}

	getTEXTcolor(backgroundColor: any) {
		const textColor = backgroundColor.slice(0, -2);
		return textColor;
	}
}
