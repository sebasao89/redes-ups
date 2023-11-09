import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaPageComponent } from './empresa-page.component';

describe('EmpresaPageComponent', () => {
  let component: EmpresaPageComponent;
  let fixture: ComponentFixture<EmpresaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EmpresaPageComponent]
});
    fixture = TestBed.createComponent(EmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
