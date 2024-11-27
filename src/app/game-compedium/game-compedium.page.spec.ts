import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCompediumPage } from './game-compedium.page';

describe('GameCompediumPage', () => {
  let component: GameCompediumPage;
  let fixture: ComponentFixture<GameCompediumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCompediumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
