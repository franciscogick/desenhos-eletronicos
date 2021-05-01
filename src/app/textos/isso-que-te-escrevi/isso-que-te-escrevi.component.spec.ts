import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssoQueTeEscreviComponent } from './isso-que-te-escrevi.component';

describe('IstoQueTeEscreviComponent', () => {
  let component: IssoQueTeEscreviComponent;
  let fixture: ComponentFixture<IssoQueTeEscreviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssoQueTeEscreviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssoQueTeEscreviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
