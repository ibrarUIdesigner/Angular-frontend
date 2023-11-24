import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
	selector: 'app-create-socials',
	templateUrl: './create-socials.component.html',
	styleUrls: ['./create-socials.component.css'],
})
export class CreateSocialsComponent implements OnInit {
	socialForm!: FormGroup;

	constructor(private toastr: ToastrService, private social: SocialsService) {}

	ngOnInit(): void {
		this.socialForm = new FormGroup({
			brand_name: new FormControl('', [Validators.required]),
			profile_url: new FormControl('', [Validators.required]),
			icon: new FormControl('', [Validators.required]),
		});
	}

	// * CREATE SOCIAL
	createSocails() {
		this.social.createSocilaProfile(this.socialForm.value).subscribe((data) => {
			this.toastr.success(data.status);
			this.socialForm.reset();
		});
	}
}
