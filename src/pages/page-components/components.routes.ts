import { Routes } from "@angular/router";
import { PageBadgeComponent } from "../page-badge/page-badge.component";
import { PageButtonComponent } from "../page-button/page-button.component";
import { PageCardComponent } from "../page-card/page-card.component";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { PageHeroComponent } from "../page-hero/page-hero.component";
import { PageKitchenSinkComponent } from "../page-kitchen-sink/page-kitchen-sink.component";
import { PageMarqueeComponent } from "../page-marquee/page-marquee.component";
import { PageQuoteComponent } from "../page-quote/page-quote.component";
import { PageSocialComponent } from "../page-social/page-social.component";
import { PageTestimonialsComponent } from "../page-testimonials/page-testimonials.component";
import { PageComponentsComponent } from "./page-components.component";

export const component_routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},

    {
        path: 'kitchen-sink', 
        component: PageKitchenSinkComponent
    },
    {
        path: 'button', 
        component: PageButtonComponent
    },
    {
        path: 'badge', 
        component: PageBadgeComponent
    },
    {
        path: 'card', 
        component: PageCardComponent
    },
    {
        path: 'header', 
        component: PageHeaderComponent
    },
    {
        path: 'heading', 
        component: PageHeadingComponent
    },
    {
        path: 'hero', 
        component: PageHeroComponent
    },
    {
        path: 'quote', 
        component: PageQuoteComponent
    },
    {
        path: 'social', 
        component: PageSocialComponent
    },
    {
        path: 'testimonials', 
        component: PageTestimonialsComponent
    },
    {
        path: 'marquee', 
        component: PageMarqueeComponent
    },
];
