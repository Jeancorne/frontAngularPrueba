import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPersonajesComponent } from './cmp-personajes.component';

describe('CmpPersonajesComponent', () => {
  let component: CmpPersonajesComponent;
  let fixture: ComponentFixture<CmpPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
