import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperdramaComponent } from './hiperdrama.component';

describe('HiperdramaComponent', () => {
  let component: HiperdramaComponent;
  let fixture: ComponentFixture<HiperdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiperdramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiperdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
