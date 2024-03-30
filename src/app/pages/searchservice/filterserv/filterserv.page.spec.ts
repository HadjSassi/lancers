import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FilterservPage } from './filterserv.page';

describe('FilterservPage', () => {
  let component: FilterservPage;
  let fixture: ComponentFixture<FilterservPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilterservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
