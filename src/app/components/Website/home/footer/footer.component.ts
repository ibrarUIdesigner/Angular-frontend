import { Component, OnInit } from '@angular/core';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
	constructor(private social: SocialsService) {}
	socialItems: any = [];

	ngOnInit(): void {
		this.getAllSocialProfiles();
	}

	getAllSocialProfiles() {
		this.social.getSocilaProfile().subscribe((data) => {
			this.socialItems = data.data;
		});
	}
}
