import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElitTeatroComponent } from './elit-teatro.component';

describe('ElitTeatroComponent', () => {
  let component: ElitTeatroComponent;
  let fixture: ComponentFixture<ElitTeatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElitTeatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElitTeatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
