import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DuasEntradasComponent } from './duas-entradas.component';

describe('DuasEntradasComponent', () => {
  let component:DuasEntradasComponent;
  let fixture: ComponentFixture<DuasEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuasEntradasComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuasEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
