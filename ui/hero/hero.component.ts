import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() heroText!: string;
  @Input() heroTextSecondary!: string;
  @Input() links!: any;
  @Input() img!: string;
  @Input() video!: string;
  @Input() full: boolean = false;
}
