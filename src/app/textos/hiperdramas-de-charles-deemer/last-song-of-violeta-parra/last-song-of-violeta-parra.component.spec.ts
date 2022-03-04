import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSongOfVioletaParraComponent } from './last-song-of-violeta-parra.component';

describe('LastSongOfVioletaParraComponent', () => {
  let component: LastSongOfVioletaParraComponent;
  let fixture: ComponentFixture<LastSongOfVioletaParraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSongOfVioletaParraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSongOfVioletaParraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
