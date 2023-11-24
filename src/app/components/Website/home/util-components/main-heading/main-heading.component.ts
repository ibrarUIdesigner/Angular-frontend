import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-main-heading',
	templateUrl: './main-heading.component.html',
	styleUrls: ['./main-heading.component.css'],
})
export class MainHeadingComponent {
	@Input('mainHeading') mainHeading: any;
	@Input('isAll') isAll: any;
	@Input('routerLink') routerLink: any;
}
