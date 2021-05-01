import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuroComponent } from './escuro.component';

describe('EscuroComponent', () => {
  let component: EscuroComponent;
  let fixture: ComponentFixture<EscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
