import { Component } from '@angular/core';
import { CardComponent } from "../../../ui/card/card.component";

@Component({
  selector: 'demo-page-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.scss'
})
export class PageCardComponent {

}
