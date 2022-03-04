import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APedraDeEuripedesComponent } from './a-pedra-de-euripedes.component';

describe('APedraDeEuripedesComponent', () => {
  let component: APedraDeEuripedesComponent;
  let fixture: ComponentFixture<APedraDeEuripedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APedraDeEuripedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APedraDeEuripedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
