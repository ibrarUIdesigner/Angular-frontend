import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';

interface Blog {
	title: string;
	category: string;
	description: string;
	image: string;
}

@Injectable({
	providedIn: 'root',
})
export class BlogsService {
	baseURL = 'http://localhost:5000/api/';

	constructor(private http: HttpClient) {}

	createBLogs(data: any): Observable<any> {
		return this.http.post<Blog[]>(this.baseURL + 'blogs', data);
	}

	getBlogs(): Observable<any> {
		return this.http.get<Blog[]>(this.baseURL + 'blogs');
	}

	deleteBlog(id: any): Observable<any> {
		return this.http.delete<Blog[]>(this.baseURL + `blogs/${id}`);
	}

	getAnalytics(): Observable<any> {
		return this.http.get(this.baseURL + 'analytics');
	}

	getDetails(id: any): Observable<any> {
		return this.http.get(this.baseURL + `blogs/${id}`);
	}

	updateBlog(id: any, data: any): Observable<any> {
		return this.http.put(this.baseURL + `blogs/${id}`, data);
	}

	updateViews(id: any): Observable<any> {
		return this.http.get(this.baseURL + `blogs/update-views/${id}`);
	}
}
