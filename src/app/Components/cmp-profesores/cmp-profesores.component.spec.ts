import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpProfesoresComponent } from './cmp-profesores.component';

describe('CmpProfesoresComponent', () => {
  let component: CmpProfesoresComponent;
  let fixture: ComponentFixture<CmpProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
