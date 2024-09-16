import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() variant: 'solid' | 'outline' | 'ghost' | 'link' = 'solid';
  @Input() role: 'create' | 'destroy' | 'info' | 'neutral' | '' = '';
  @Input() disabled: boolean = false;
}
