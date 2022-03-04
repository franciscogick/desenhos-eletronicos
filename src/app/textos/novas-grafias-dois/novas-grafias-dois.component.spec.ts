import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasGrafiasDoisComponent } from './novas-grafias-dois.component';

describe('NovasGrafiasDoisComponent', () => {
  let component: NovasGrafiasDoisComponent;
  let fixture: ComponentFixture<NovasGrafiasDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovasGrafiasDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasGrafiasDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
