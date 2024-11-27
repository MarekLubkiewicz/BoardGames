import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourEntriesPage } from './your-entries.page';

describe('YourEntriesPage', () => {
  let component: YourEntriesPage;
  let fixture: ComponentFixture<YourEntriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourEntriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
