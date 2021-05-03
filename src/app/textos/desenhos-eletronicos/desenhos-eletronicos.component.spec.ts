import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhosEletronicosComponent } from './desenhos-eletronicos.component';

describe('DesenhosEletronicosComponent', () => {
  let component: DesenhosEletronicosComponent;
  let fixture: ComponentFixture<DesenhosEletronicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenhosEletronicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhosEletronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
