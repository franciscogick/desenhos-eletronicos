import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasGrafiasComponent } from './novas-grafias.component';

describe('NovasGrafiasComponent', () => {
  let component: NovasGrafiasComponent;
  let fixture: ComponentFixture<NovasGrafiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovasGrafiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasGrafiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
