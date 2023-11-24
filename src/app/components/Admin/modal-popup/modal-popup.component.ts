import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	OnChanges,
	SimpleChanges,
} from '@angular/core';

@Component({
	selector: 'app-modal-popup',
	templateUrl: './modal-popup.component.html',
	styleUrls: ['./modal-popup.component.css'],
})
export class ModalPopupComponent implements OnChanges {
	@Input('modalHeading') modalHeading: any;
	@Input('modalId') modalId: any;
	@Input('closeModal') closeModal: any;
	@ViewChild('close', { static: true }) close!: ElementRef;

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(this.closeModal);
		this.close.nativeElement.click();
	}
}
