import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Tags {
	name: string;
}

@Injectable({
	providedIn: 'root',
})
export class TagsService {
	// baseURL = 'http://72.255.1.111:8000/api/';
	baseURL = 'http://72.255.1.111:8000/api/';
	constructor(private http: HttpClient) {}

	createTags(data: Tags): Observable<any> {
		return this.http.post(this.baseURL + 'tags', data);
	}

	getTags(): Observable<any> {
		return this.http.get<Tags>(this.baseURL + 'tags');
	}

	deleteTags(id: any): Observable<any> {
		return this.http.delete(this.baseURL + 'tags/' + id);
	}
}
