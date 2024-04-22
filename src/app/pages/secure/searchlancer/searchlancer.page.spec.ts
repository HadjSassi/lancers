import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchlancerPage } from './searchlancer.page';

describe('SearchlancerPage', () => {
  let component: SearchlancerPage;
  let fixture: ComponentFixture<SearchlancerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchlancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
