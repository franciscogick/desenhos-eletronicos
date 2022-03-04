import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperdramasDeCharlesDeemerComponent } from './hiperdramas-de-charles-deemer.component';

describe('HiperdramasDeCharlesDeemerComponent', () => {
  let component: HiperdramasDeCharlesDeemerComponent;
  let fixture: ComponentFixture<HiperdramasDeCharlesDeemerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiperdramasDeCharlesDeemerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiperdramasDeCharlesDeemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
