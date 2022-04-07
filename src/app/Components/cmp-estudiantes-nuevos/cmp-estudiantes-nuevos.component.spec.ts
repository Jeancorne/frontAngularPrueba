import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEstudiantesNuevosComponent } from './cmp-estudiantes-nuevos.component';

describe('CmpEstudiantesNuevosComponent', () => {
  let component: CmpEstudiantesNuevosComponent;
  let fixture: ComponentFixture<CmpEstudiantesNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpEstudiantesNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEstudiantesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
