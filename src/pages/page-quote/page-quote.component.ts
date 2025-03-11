import { Component } from '@angular/core';
import { QuoteComponent } from "../../../ui/quote/quote.component";
import { CodeSnippetComponent } from "../../components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-quote',
  standalone: true,
  imports: [QuoteComponent, CodeSnippetComponent],
  templateUrl: './page-quote.component.html',
  styleUrl: './page-quote.component.scss'
})
export class PageQuoteComponent {
  snippet = `
  <app-quote text="What a lovely quote" />`;
}
