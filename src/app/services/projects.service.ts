import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	baseURL = 'http://localhost:5000/api/';
	constructor(private http: HttpClient) {}

	getAllProjects(): Observable<any> {
		return this.http.get(this.baseURL + 'posts');
	}

	createProjects(data: any): Observable<any> {
		return this.http.post(this.baseURL + 'posts', data);
	}

	deletProject(id: any): Observable<any> {
		return this.http.delete(this.baseURL + `posts/${id}`);
	}

	updateProject(id: any, data: any): Observable<any> {
		return this.http.put(this.baseURL + `posts/${id}`, data);
	}

	topBlogs(): Observable<any> {
		return this.http.get(this.baseURL + 'top-blogs');
	}
}
