import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.component.html',
	styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
	allProfile: any[] = [];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();
	constructor(private social: SocialsService, private toastr: ToastrService) {}
	ngOnInit(): void {
		this.getAllSocialProfiles();
	}

	getAllSocialProfiles() {
		this.social.getSocilaProfile().subscribe((data) => {
			this.allProfile = data.data;
			this.dtTrigger.next(event);
		});
	}

	// *
	deleteSocial(event: Event, social: any) {
		event.preventDefault();
		this.social.deleteSocilaProfile(social._id).subscribe((next) => {
			this.allProfile = this.allProfile.filter(
				(pro: any) => pro._id !== social._id,
			);
			this.toastr.success(next.status);
		});
	}
}
