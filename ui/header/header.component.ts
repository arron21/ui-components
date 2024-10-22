import { CommonModule, NgClass } from '@angular/common';
import { Component, HostBinding, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  hostDirectives: [NgClass]
})
export class HeaderComponent {
  @Input() sticky: boolean = false;
  @Input() fixed: boolean = false;
  @Input() shiftBg: string = 'var(--background)';
  @Input() scrollEl: string = 'router';
  @Input() scrollThreshold: number = 0;
  isScrolled: boolean = false;

  currentBackground: string = 'transparent';

  @ViewChild('headerContainer') container!: HTMLDivElement; 

  ngAfterViewInit() {
    if(this.shiftBg) {
      const scrollEl = document.getElementsByClassName('router')[0];
      scrollEl.addEventListener('scroll', () => {
        this.isScrolled = scrollEl.scrollTop > this.scrollThreshold;

        if(this.isScrolled) {
          this.currentBackground = this.shiftBg
        } else {
          this.currentBackground = 'transparent'
        }
  
        console.log("🚀 ~ HeaderComponent ~ ngAfterViewInit ~ scrollEl:", this.isScrolled)
      
      })
    } 
  }
}
