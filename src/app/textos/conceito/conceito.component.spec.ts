import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitoComponent } from './conceito.component';

describe('ConceitoComponent', () => {
  let component: ConceitoComponent;
  let fixture: ComponentFixture<ConceitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
