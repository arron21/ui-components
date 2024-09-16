import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'demo-page-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page-button.component.html',
  styleUrl: './page-button.component.scss'
})
export class PageButtonComponent {

}
