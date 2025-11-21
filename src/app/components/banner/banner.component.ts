import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  imports: [MatIcon],
})
export class BannerComponent {
  @Input() public bannerHeading: string = '';
  @Input() public bannerContent: string = '';
}
