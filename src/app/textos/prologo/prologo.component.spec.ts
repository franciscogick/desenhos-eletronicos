import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrologoComponent } from './prologo.component';

describe('PrologoComponent', () => {
  let component: PrologoComponent;
  let fixture: ComponentFixture<PrologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
