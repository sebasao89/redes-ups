import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpresaPageComponent } from './list-empresa-page.component';

describe('ListEmpresaPageComponent', () => {
  let component: ListEmpresaPageComponent;
  let fixture: ComponentFixture<ListEmpresaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmpresaPageComponent]
    });
    fixture = TestBed.createComponent(ListEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
