import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@ui/button/button.component';
import { HeroComponent } from '@ui/hero/hero.component';
import { NavComponent } from '@ui/nav/nav.component';
import { routes } from './app.routes';
import { PageHomeComponent } from "../pages/page-home/page-home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, HeroComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';

  routes = routes;
  links = [
    {
      path: 'home', 
      component: PageHomeComponent
    },
    {
      path: 'components', 
      component: PageHomeComponent
  },
  ];
}
