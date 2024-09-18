import { Component } from '@angular/core';
import { HeadingComponent } from "@ui/heading/heading.component";
import { BadgeComponent } from "@ui/badge/badge.component";
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-home',
  standalone: true,
  imports: [HeadingComponent, BadgeComponent, CodeSnippetComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {

  markdown1 = `npx blonkz@latest init`;
}
