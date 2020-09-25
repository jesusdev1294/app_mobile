import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesPage } from './especialidades.page';

describe('EspecialidadesPage', () => {
  let component: EspecialidadesPage;
  let fixture: ComponentFixture<EspecialidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
