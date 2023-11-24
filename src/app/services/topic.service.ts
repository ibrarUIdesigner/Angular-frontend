import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TOPICS {
	title: string;
	icon: string;
	artiles: string;
}

@Injectable({
	providedIn: 'root',
})
export class TopicService {
	baseURL = 'http://localhost:5000/api/';
	constructor(private http: HttpClient) {}

	getTopics(): Observable<any> {
		return this.http.get<TOPICS[]>(this.baseURL + 'topics');
	}

	createTopics(data: any): Observable<any> {
		return this.http.post<TOPICS[]>(this.baseURL + 'topics', data);
	}

	getTopicDetails(id: any): Observable<any> {
		return this.http.get(this.baseURL + `topics/${id}`);
	}

	updateTopic(id: any, data: any): Observable<any> {
		return this.http.put(this.baseURL + `topics/${id}`, data);
	}

	deleteTopic(id: any): Observable<any> {
		return this.http.delete(this.baseURL + `topics/${id}`);
	}
}
