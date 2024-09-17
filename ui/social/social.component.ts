import { Component, Input } from '@angular/core';

import { IconFacebookComponent } from "./icon-facebook/icon-facebook.component";
import { IconInstagramComponent } from "./icon-instagram/icon-instagram.component";
import { IconTiktokComponent } from "./icon-tiktok/icon-tiktok.component";
import { IconTwitterComponent } from "./icon-twitter/icon-twitter.component";
import { IconYoutubeComponent } from "./icon-youtube/icon-youtube.component";

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [IconFacebookComponent, IconInstagramComponent, IconTiktokComponent, IconTwitterComponent, IconYoutubeComponent],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  @Input() facebook!: string;
  @Input() instagram!: string;
  @Input() youtube!: string;
  @Input() tiktok!: string;
  @Input() twitter!: string;
}
