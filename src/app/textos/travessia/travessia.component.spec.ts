import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravessiaComponent } from './travessia.component';

describe('TravessiaComponent', () => {
  let component: TravessiaComponent;
  let fixture: ComponentFixture<TravessiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravessiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravessiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
