import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ModulesService {
	baseURL = 'http://localhost:5000/api/';
	constructor(private http: HttpClient) {}

	createModule(data: any): Observable<any> {
		return this.http.post(this.baseURL + `module`, data);
	}

	getModules(): Observable<any> {
		return this.http.get(this.baseURL + `module`);
	}

	shiftArticleToModule(id: any, data: any): Observable<any> {
		return this.http.post(this.baseURL + `article-to-module/${id}`, data);
	}

	getModuleArtilces(id: any): Observable<any> {
		return this.http.get(this.baseURL + `module/${id}`);
	}

	removeArticleFromModule(m_id: any, a_id: any): Observable<any> {
		return this.http.get(
			this.baseURL + `module/remove-article/${m_id}/${a_id}`,
		);
	}

	moduleToTopic(id: any, data: any): Observable<any> {
		return this.http.post(this.baseURL + `module-to-topic/${id}`, data);
	}

	deleteModule(id: any): Observable<any> {
		return this.http.delete(this.baseURL + `module/${id}`);
	}

	updateModule(id: any, data: any): Observable<any> {
		return this.http.put(this.baseURL + `module/${id}`, data);
	}
}
