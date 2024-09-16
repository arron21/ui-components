import { Component, Input } from '@angular/core';
import { Testimonial } from './Testimonial';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  @Input() testimonials!: Testimonial[];

  scroll = 0;
  testimonialWidth = 100;
  currentTestimonial = 1;

  goLeft() {
    if(this.scroll > (-1 * this.testimonialWidth * (this.testimonials.length - 1))) {
      this.scroll -=  this.testimonialWidth;
      this.currentTestimonial += 1;
    } 
  }

  goRight() {
    if(this.scroll < 0) {
      this.scroll += this.testimonialWidth;
      this.currentTestimonial -= 1;

    }
  }
}
