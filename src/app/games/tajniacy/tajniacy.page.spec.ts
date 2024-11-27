import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TajniacyPage } from './tajniacy.page';

describe('TajniacyPage', () => {
  let component: TajniacyPage;
  let fixture: ComponentFixture<TajniacyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TajniacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
