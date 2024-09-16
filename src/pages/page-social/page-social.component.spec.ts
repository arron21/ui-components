import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSocialComponent } from './page-social.component';

describe('PageSocialComponent', () => {
  let component: PageSocialComponent;
  let fixture: ComponentFixture<PageSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
