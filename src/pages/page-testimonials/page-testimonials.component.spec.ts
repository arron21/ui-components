import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestimonialsComponent } from './page-testimonials.component';

describe('PageTestimonialsComponent', () => {
  let component: PageTestimonialsComponent;
  let fixture: ComponentFixture<PageTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
