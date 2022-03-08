import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoDebrayComponent } from './manifesto-debray.component';

describe('ManifestoDebrayComponent', () => {
  let component: ManifestoDebrayComponent;
  let fixture: ComponentFixture<ManifestoDebrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifestoDebrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestoDebrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
