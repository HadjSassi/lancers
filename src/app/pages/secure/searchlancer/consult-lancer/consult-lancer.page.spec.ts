import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultLancerPage } from './consult-lancer.page';

describe('ConsultLancerPage', () => {
  let component: ConsultLancerPage;
  let fixture: ComponentFixture<ConsultLancerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultLancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
