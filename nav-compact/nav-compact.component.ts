import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-compact',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass],
  templateUrl: './nav-compact.component.html',
  styleUrl: './nav-compact.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavCompactComponent {
  @Input() links: any;

  @ViewChildren('link') linksRef!: QueryList<ElementRef>;
  @ViewChildren('menu') menuRef!: QueryList<ElementRef>;



  active: boolean = false;

  
  ngAfterViewInit() {
    console.log(this)
    // this.applyFlipAnimation();
  }


  closeNav() {
    this.active = false;
  }

  toggleNav() {
    this.active = !this.active;
  }

  constructor() {
    // const btn = document.getElementById("menuToggle");
    // const menu = document.getElementById("menuList");
  }
}
