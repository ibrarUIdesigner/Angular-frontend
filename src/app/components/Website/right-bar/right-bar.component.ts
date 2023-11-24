import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { SocialsService } from 'src/app/services/socials.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
	selector: 'app-right-bar',
	templateUrl: './right-bar.component.html',
	styleUrls: ['./right-bar.component.css'],
})
export class RightBarComponent implements OnInit {
	constructor(
		private social: SocialsService,
		private projects: ProjectsService,
		private tags: TagsService,
		private route: Router,
	) {}
	socialItems: any = [];
	topBlogs: any = [];
	popularTags: any = [];
	currentRoute: any;

	ngOnInit(): void {
		this.getAllSocialProfiles();
		this.getTopBlogs();
		this.getPopularTags();
		this.currentRoute = this.route.url.split('/');
	}

	getAllSocialProfiles() {
		this.social.getSocilaProfile().subscribe((data) => {
			this.socialItems = data.data;
		});
	}

	//* GET TOP BLOGS
	getTopBlogs() {
		this.projects.topBlogs().subscribe((data) => {
			this.topBlogs = data.data.slice(0, 5);
		});
	}

	// * GET POPULAR TAGS
	getPopularTags() {
		this.tags.getTags().subscribe((data) => {
			this.popularTags = data.data.slice(0, 6);
		});
	}
}
