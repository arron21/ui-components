import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuoteComponent } from './page-quote.component';

describe('PageQuoteComponent', () => {
  let component: PageQuoteComponent;
  let fixture: ComponentFixture<PageQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
