import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTikTok = faTiktok;
  faTwitter = faTwitter;

  @Input() facebook!: string;
  @Input() instagram!: string;
  @Input() youtube!: string;
  @Input() tiktok!: string;
  @Input() twitter!: string;
}
