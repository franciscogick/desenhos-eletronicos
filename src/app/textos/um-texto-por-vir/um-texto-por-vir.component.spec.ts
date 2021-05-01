import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmTextoPorVirComponent } from './um-texto-por-vir.component';

describe('UmTextoPorVirComponent', () => {
  let component: UmTextoPorVirComponent;
  let fixture: ComponentFixture<UmTextoPorVirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmTextoPorVirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmTextoPorVirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
