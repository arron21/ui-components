import { Component } from '@angular/core';
import { HeaderComponent } from "../../../ui/header/header.component";
import { HeroComponent } from "../../../ui/hero/hero.component";
import { HeadingComponent } from "../../../ui/heading/heading.component";
import { BadgeComponent } from "../../../ui/badge/badge.component";
import { ButtonComponent } from "../../../ui/button/button.component";
import { CardComponent } from "../../../ui/card/card.component";
import { QuoteComponent } from "../../../ui/quote/quote.component";
import { SocialComponent } from "../../../ui/social/social.component";

@Component({
  selector: 'demo-page-kitchen-sink',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, HeadingComponent, BadgeComponent, ButtonComponent, CardComponent, QuoteComponent, SocialComponent],
  templateUrl: './page-kitchen-sink.component.html',
  styleUrl: './page-kitchen-sink.component.scss'
})
export class PageKitchenSinkComponent {

}
