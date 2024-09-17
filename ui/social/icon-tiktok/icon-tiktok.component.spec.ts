import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTiktokComponent } from './icon-tiktok.component';

describe('IconTiktokComponent', () => {
  let component: IconTiktokComponent;
  let fixture: ComponentFixture<IconTiktokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTiktokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTiktokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
