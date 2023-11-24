import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.css']
})
export class SubBannerComponent {

  @Input("mainHeading") mainHeading:any
  @Input("routeName") routeName:any

}
