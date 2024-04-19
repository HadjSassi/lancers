import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancerContractsPage } from './lancer-contracts.page';

describe('LancerContractsPage', () => {
  let component: LancerContractsPage;
  let fixture: ComponentFixture<LancerContractsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancerContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
