import { Component } from '@angular/core';
import { QuoteComponent } from "../../../ui/quote/quote.component";

@Component({
  selector: 'demo-page-quote',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './page-quote.component.html',
  styleUrl: './page-quote.component.scss'
})
export class PageQuoteComponent {

}
