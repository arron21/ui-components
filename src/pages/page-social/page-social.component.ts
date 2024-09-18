import { Component } from '@angular/core';
import { SocialComponent } from "../../../ui/social/social.component";
import { CodeSnippetComponent } from "../../components/code-snippet/code-snippet.component";

@Component({
  selector: 'demo-page-social',
  standalone: true,
  imports: [SocialComponent, CodeSnippetComponent],
  templateUrl: './page-social.component.html',
  styleUrl: './page-social.component.scss'
})
export class PageSocialComponent {
  snippet = `
  <app-social 
  facebook="https://www.facebook.com/#" 
  instagram="https://www.instagram.com/#" 
  youtube="https://www.youtube.com/c/#" 
  twitter="https://twitter.com/#" 
  tiktok="https://www.tiktok.com/@#" />`
}
