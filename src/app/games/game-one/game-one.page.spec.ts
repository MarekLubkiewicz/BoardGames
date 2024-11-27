import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameOnePage } from './game-one.page';

describe('GameOnePage', () => {
  let component: GameOnePage;
  let fixture: ComponentFixture<GameOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
