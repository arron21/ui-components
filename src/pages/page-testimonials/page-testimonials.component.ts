import { Component } from '@angular/core';
import { TestimonialsComponent } from "../../../ui/testimonials/testimonials.component";

@Component({
  selector: 'demo-page-testimonials',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './page-testimonials.component.html',
  styleUrl: './page-testimonials.component.scss'
})
export class PageTestimonialsComponent {

  testimonials = [
    {
      author: 'Arron', 
      text: 'Blonks is very easy to use. I had the components I wanted in my Angular project in less than 5 minutes.',
    },
    {
      author: 'Arron', 
      text: 'By using Blonkz, I was able to create a responsive website with a clean and modern design. The components are easy to use and customize, and the documentation is clear and concise.',
    }, {
      author: 'Arron', 
      text: 'Blonkz has really improved my workflow. I can now create a website quickly and easily, and I can customize the components to fit my needs.',
    }
  ]
}
