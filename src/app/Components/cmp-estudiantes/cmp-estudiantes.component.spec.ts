import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEstudiantesComponent } from './cmp-estudiantes.component';

describe('CmpEstudiantesComponent', () => {
  let component: CmpEstudiantesComponent;
  let fixture: ComponentFixture<CmpEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
