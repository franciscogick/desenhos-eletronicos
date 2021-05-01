import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexiasConectadasComponent } from './lexias-conectadas.component';

describe('LexiasConectadasComponent', () => {
  let component: LexiasConectadasComponent;
  let fixture: ComponentFixture<LexiasConectadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexiasConectadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiasConectadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
