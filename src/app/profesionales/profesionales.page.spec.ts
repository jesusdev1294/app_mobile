import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalesPage } from './profesionales.page';

describe('ProfesionalesPage', () => {
  let component: ProfesionalesPage;
  let fixture: ComponentFixture<ProfesionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
