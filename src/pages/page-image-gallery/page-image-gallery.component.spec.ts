import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageGalleryComponent } from './page-image-gallery.component';

describe('PageImageGalleryComponent', () => {
  let component: PageImageGalleryComponent;
  let fixture: ComponentFixture<PageImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImageGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
