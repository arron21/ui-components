import { Component } from '@angular/core';
import { HeadingComponent } from "@ui/heading/heading.component";
import { BadgeComponent } from "@ui/badge/badge.component";
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";
import { NavComponent } from "@ui/nav/nav.component";
import { RouterModule } from "@angular/router";
import { component_routes } from "./components.routes";

@Component({
  selector: 'demo-page-components',
  standalone: true,
  imports: [RouterModule, HeadingComponent, BadgeComponent, CodeSnippetComponent, NavComponent],
  templateUrl: './page-components.component.html',
  styleUrl: './page-components.component.scss'
})
export class PageComponentsComponent {

  routes = component_routes
  markdown1 = `npx aer@latest init`;
}
