import { Routes } from '@angular/router';
import { PageButtonComponent } from '@pages/page-button/page-button.component';
import { PageHomeComponent } from '@pages/page-home/page-home.component';
import { PageBadgeComponent } from '@pages/page-badge/page-badge.component';
import { PageCardComponent } from '@pages/page-card/page-card.component';
import { PageHeaderComponent } from '@pages/page-header/page-header.component';
import { PageHeadingComponent } from '@pages/page-heading/page-heading.component';
import { PageHeroComponent } from '@pages/page-hero/page-hero.component';
import { PageImageGalleryComponent } from '@pages/page-image-gallery/page-image-gallery.component';
import { PageQuoteComponent } from '@pages/page-quote/page-quote.component';
import { PageSocialComponent } from '@pages/page-social/page-social.component';
import { PageTestimonialsComponent } from '@pages/page-testimonials/page-testimonials.component';
import { PageKitchenSinkComponent } from '@pages/page-kitchen-sink/page-kitchen-sink.component';
import { PageMarqueeComponent } from "@pages/page-marquee/page-marquee.component";
import { PageComponentsComponent } from "@pages/page-components/page-components.component";
export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {
        path: 'home', 
        component: PageHomeComponent
    },
    {
        path: 'components', 
        component: PageComponentsComponent,
        children: [
            
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
            
        ]
    },
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
