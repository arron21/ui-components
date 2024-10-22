import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKitchenSinkComponent } from './page-kitchen-sink.component';

describe('PageKitchenSinkComponent', () => {
  let component: PageKitchenSinkComponent;
  let fixture: ComponentFixture<PageKitchenSinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageKitchenSinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageKitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
