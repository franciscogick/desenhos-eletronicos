import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitacaoDiretaComponent } from './citacao-direta.component';

describe('CitacaoDiretaComponent', () => {
  let component: CitacaoDiretaComponent;
  let fixture: ComponentFixture<CitacaoDiretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitacaoDiretaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitacaoDiretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
