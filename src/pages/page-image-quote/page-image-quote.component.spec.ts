import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageQuoteComponent } from './page-image-quote.component';

describe('PageImageQuoteComponent', () => {
  let component: PageImageQuoteComponent;
  let fixture: ComponentFixture<PageImageQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImageQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageImageQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
