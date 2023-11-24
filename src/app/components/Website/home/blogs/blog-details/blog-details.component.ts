import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-blog-details',
	templateUrl: './blog-details.component.html',
	styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
	id: any;
	blog: any;
	sanitizedResponse!: SafeHtml;

	constructor(
		private route: ActivatedRoute,
		private blogs: BlogsService,
		private sanitizer: DomSanitizer,
	) {}

	ngOnInit(): void {
		// this.id = this.route.snapshot.paramMap.get('id');
		this.route.params.subscribe((params) => {
			this.id = params['id'];
			this.getBlogDetails();
		});
	}

	//* BLOG DETAILS
	getBlogDetails() {
		this.blogs.getDetails(this.id).subscribe((data) => {
			this.blog = data.data;
			this.sanitizedResponse = this.sanitizer.bypassSecurityTrustHtml(
				data.data.details,
			);

			setTimeout(() => {
				let contentImages: any = document.querySelectorAll<HTMLElement>(
					'div#main-content img',
				);
				contentImages.forEach((element: any) => {
					element.style.width = 100 + '%';
					element.style.borderRadius = 10 + 'px';
				});
			}, 500);

			this.updateBlogViews();
		});
	}

	// * UPDATE VIEW
	updateBlogViews() {
		this.blogs.updateViews(this.id).subscribe();
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
