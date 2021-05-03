import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionADialogueComponent } from './transmission-a-dialogue.component';

describe('TransmissionADialogueComponent', () => {
  let component: TransmissionADialogueComponent;
  let fixture: ComponentFixture<TransmissionADialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissionADialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionADialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
