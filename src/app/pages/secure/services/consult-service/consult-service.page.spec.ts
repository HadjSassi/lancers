import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ConsultServicePage } from './consult-service.page';

describe('ConsultServicePage', () => {
  let component: ConsultServicePage;
  let fixture: ComponentFixture<ConsultServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
