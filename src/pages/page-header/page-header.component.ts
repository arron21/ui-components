import { Component } from '@angular/core';
import { HeaderComponent } from '@ui/header/header.component';
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";
@Component({
  selector: 'demo-page-header',
  standalone: true,
  imports: [HeaderComponent, CodeSnippetComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  snippet = `
  <app-header>Header</app-header>
  <app-header [sticky]="true">Sticky Header</app-header>`;
}
