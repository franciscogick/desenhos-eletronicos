import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaturgiasDigitaisComponent } from './dramaturgias-digitais.component';

describe('DramaturgiasDigitaisComponent', () => {
  let component: DramaturgiasDigitaisComponent;
  let fixture: ComponentFixture<DramaturgiasDigitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramaturgiasDigitaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaturgiasDigitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
