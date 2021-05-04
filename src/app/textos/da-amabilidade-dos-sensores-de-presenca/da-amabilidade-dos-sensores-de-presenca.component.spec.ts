import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaAmabilidadeDosSensoresDePresencaComponent } from './da-amabilidade-dos-sensores-de-presenca.component';

describe('DaAmabilidadeDosSensoresDePresencaComponent', () => {
  let component: DaAmabilidadeDosSensoresDePresencaComponent;
  let fixture: ComponentFixture<DaAmabilidadeDosSensoresDePresencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaAmabilidadeDosSensoresDePresencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaAmabilidadeDosSensoresDePresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
