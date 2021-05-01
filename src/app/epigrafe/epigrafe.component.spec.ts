import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpigrafeComponent } from './epigrafe.component';

describe('EpigrafeComponent', () => {
  let component: EpigrafeComponent;
  let fixture: ComponentFixture<EpigrafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpigrafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpigrafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
