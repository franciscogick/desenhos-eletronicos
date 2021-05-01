import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartografiaLiteraturaDigitalComponent } from './cartografia-literatura-digital.component';

describe('CartografiaLiteraturaDigitalComponent', () => {
  let component: CartografiaLiteraturaDigitalComponent;
  let fixture: ComponentFixture<CartografiaLiteraturaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartografiaLiteraturaDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartografiaLiteraturaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
