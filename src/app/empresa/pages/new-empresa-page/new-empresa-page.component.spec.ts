import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpresaPageComponent } from './new-empresa-page.component';

describe('NewEmpresaPageComponent', () => {
  let component: NewEmpresaPageComponent;
  let fixture: ComponentFixture<NewEmpresaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmpresaPageComponent]
    });
    fixture = TestBed.createComponent(NewEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
