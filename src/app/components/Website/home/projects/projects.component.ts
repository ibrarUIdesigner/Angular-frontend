import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
	allProjects: any[] = [];

	constructor(private projects: ProjectsService) {}

	ngOnInit(): void {
		this.projects.getAllProjects().subscribe((data) => {
			this.allProjects = data.data;
		});
	}

	// Array of specific colors
	colors = ['#FFF3EA', '#FDFF8D66'];

	getColor(index: number) {
		return this.colors[index % this.colors.length];
	}

	// Function to get the latest 2 projects
	getLatestProjects() {
		return this.allProjects.slice(-2);
	}
}
