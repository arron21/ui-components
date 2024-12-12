import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMarqueeComponent } from './page-marquee.component';

describe('PageMarqueeComponent', () => {
  let component: PageMarqueeComponent;
  let fixture: ComponentFixture<PageMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
