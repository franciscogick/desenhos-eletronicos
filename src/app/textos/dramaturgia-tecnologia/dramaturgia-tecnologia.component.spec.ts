import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaturgiaTecnologiaComponent } from './dramaturgia-tecnologia.component';

describe('DramaturgiaTecnologiaComponent', () => {
  let component: DramaturgiaTecnologiaComponent;
  let fixture: ComponentFixture<DramaturgiaTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramaturgiaTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaturgiaTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
