import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizomaComponent } from './rizoma.component';

describe('RizomaComponent', () => {
  let component: RizomaComponent;
  let fixture: ComponentFixture<RizomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RizomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RizomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
