import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaturgiaCodigoComponent } from './dramaturgia-codigo.component';

describe('DramaturgiaCodigoComponent', () => {
  let component: DramaturgiaCodigoComponent;
  let fixture: ComponentFixture<DramaturgiaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramaturgiaCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaturgiaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
