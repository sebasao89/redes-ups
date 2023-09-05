import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPagesComponent } from './layout-pages.component';

describe('LayoutPagesComponent', () => {
  let component: LayoutPagesComponent;
  let fixture: ComponentFixture<LayoutPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPagesComponent]
    });
    fixture = TestBed.createComponent(LayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
