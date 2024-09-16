import { Component } from '@angular/core';
import { BadgeComponent } from "../../../ui/badge/badge.component";

@Component({
  selector: 'demo-page-badge',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './page-badge.component.html',
  styleUrl: './page-badge.component.scss'
})
export class PageBadgeComponent {

}
