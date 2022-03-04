import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IveSeenTheFutureAndItsARobotComponent } from './ive-seen-the-future-and-its-a-robot.component';

describe('IveSeenTheFutureAndItsARobotComponent', () => {
  let component: IveSeenTheFutureAndItsARobotComponent;
  let fixture: ComponentFixture<IveSeenTheFutureAndItsARobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IveSeenTheFutureAndItsARobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IveSeenTheFutureAndItsARobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
