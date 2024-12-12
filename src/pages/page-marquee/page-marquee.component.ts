import { Component } from '@angular/core';
import { MarqueeComponent } from "@ui/marquee/marquee.component";

@Component({
  selector: 'demo-page-marquee',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './page-marquee.component.html',
  styleUrl: './page-marquee.component.scss'
})
export class PageMarqueeComponent {

}
