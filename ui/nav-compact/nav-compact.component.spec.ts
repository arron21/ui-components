import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCompactComponent } from './nav-compact.component';

describe('NavCompactComponent', () => {
  let component: NavCompactComponent;
  let fixture: ComponentFixture<NavCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCompactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
