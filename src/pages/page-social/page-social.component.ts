import { Component } from '@angular/core';
import { SocialComponent } from "../../../ui/social/social.component";

@Component({
  selector: 'demo-page-social',
  standalone: true,
  imports: [SocialComponent],
  templateUrl: './page-social.component.html',
  styleUrl: './page-social.component.scss'
})
export class PageSocialComponent {

}
