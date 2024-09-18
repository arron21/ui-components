import { Component } from '@angular/core';
import { HeroComponent } from "@ui/hero/hero.component";
import { CodeSnippetComponent } from "@components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-hero',
  standalone: true,
  imports: [HeroComponent, CodeSnippetComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {

  markdown1 = `
  @Input() heroText!: string;
  @Input() heroTextSecondary!: string;
  @Input() links!: any;
  @Input() img!: string;
  @Input() video!: string;
  @Input() full: boolean = false;`
}
