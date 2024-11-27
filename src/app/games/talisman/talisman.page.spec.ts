import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalismanPage } from './talisman.page';

describe('TalismanPage', () => {
  let component: TalismanPage;
  let fixture: ComponentFixture<TalismanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TalismanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
