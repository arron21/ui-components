import { Component } from '@angular/core';
import { BadgeComponent } from "@ui/badge/badge.component";
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-badge',
  standalone: true,
  imports: [BadgeComponent, CodeSnippetComponent],
  templateUrl: './page-badge.component.html',
  styleUrl: './page-badge.component.scss'
})
export class PageBadgeComponent {

  markdown = `
  <app-badge variant="outline">solid</app-badge>
  <app-badge variant="solid">solid</app-badge>
  <app-badge>subtle</app-badge>`;
}
