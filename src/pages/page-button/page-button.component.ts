import { Component } from '@angular/core';
import { ButtonComponent } from '@ui/button/button.component';
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-button',
  standalone: true,
  imports: [ButtonComponent, CodeSnippetComponent],
  templateUrl: './page-button.component.html',
  styleUrl: './page-button.component.scss'
})
export class PageButtonComponent {
  markdown = `
  <app-button>solid</app-button>
  <app-button variant="outline">outline</app-button>
  <app-button variant="ghost">ghost</app-button>
  <app-button variant="link">link</app-button>
  <app-button [disabled]="true">disabled</app-button>

  <app-button size="xs">xs</app-button>
  <app-button size="sm">sm</app-button>
  <app-button size="md">md</app-button>
  <app-button size="lg">lg</app-button>
  <app-button size="xl">xl</app-button> `;

}
