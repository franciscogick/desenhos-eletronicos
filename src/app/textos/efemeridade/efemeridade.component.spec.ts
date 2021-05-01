import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfemeridadeComponent } from './efemeridade.component';

describe('EfemeridadeComponent', () => {
  let component: EfemeridadeComponent;
  let fixture: ComponentFixture<EfemeridadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfemeridadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfemeridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
