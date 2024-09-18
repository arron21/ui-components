import { Component } from '@angular/core';
import { HeadingComponent } from "@ui/heading/heading.component";

@Component({
  selector: 'demo-page-heading',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss'
})
export class PageHeadingComponent {

}
