import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWhenARobotWritesAPlayComponent } from './ai-when-a-robot-writes-a-play.component';

describe('AiWhenARobotWritesAPlayComponent', () => {
  let component: AiWhenARobotWritesAPlayComponent;
  let fixture: ComponentFixture<AiWhenARobotWritesAPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiWhenARobotWritesAPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiWhenARobotWritesAPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
