import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturaDigitalComponent } from './literatura-digital.component';

describe('LiteraturaDigitalComponent', () => {
  let component: LiteraturaDigitalComponent;
  let fixture: ComponentFixture<LiteraturaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraturaDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraturaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
