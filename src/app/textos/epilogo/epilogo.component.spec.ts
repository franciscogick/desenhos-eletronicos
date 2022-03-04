import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilogoComponent } from './epilogo.component';

describe('EpilogoComponent', () => {
  let component: EpilogoComponent;
  let fixture: ComponentFixture<EpilogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpilogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpilogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
