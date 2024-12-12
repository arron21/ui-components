import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  @Input() text!: string;
  @Input() text2!: string;

  repeatCount: number[] = Array.from(Array(20).keys())
}
