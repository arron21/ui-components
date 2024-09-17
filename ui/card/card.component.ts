import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule, HeadingComponent],
})
export class CardComponent {
  @Input() cardTitle!: string;
  @Input() subTitle!: string;
  @Input() image!: string;

}
