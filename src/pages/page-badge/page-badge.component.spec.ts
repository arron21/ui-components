import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBadgeComponent } from './page-badge.component';

describe('PageBadgeComponent', () => {
  let component: PageBadgeComponent;
  let fixture: ComponentFixture<PageBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
