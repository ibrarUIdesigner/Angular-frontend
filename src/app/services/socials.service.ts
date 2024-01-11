import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Social {
	brand_name: string;
	profile_url: string;
	icon: string;
}

@Injectable({
	providedIn: 'root',
})
export class SocialsService {
	// baseURL = 'http://72.255.1.111:8000/api/';
	baseURL = 'http://72.255.1.111:8000/api/';
	constructor(private http: HttpClient) {}

	createSocilaProfile(data: any): Observable<any> {
		return this.http.post(this.baseURL + 'socials', data);
	}

	getSocilaProfile(): Observable<any> {
		return this.http.get<Social[]>(this.baseURL + 'socials');
	}

	deleteSocilaProfile(id: any): Observable<any> {
		return this.http.delete(this.baseURL + `socials/${id}`);
	}
}
