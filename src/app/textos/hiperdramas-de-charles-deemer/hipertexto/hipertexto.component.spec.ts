import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertextoComponent } from './hipertexto.component';

describe('HipertextoComponent', () => {
  let component: HipertextoComponent;
  let fixture: ComponentFixture<HipertextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
