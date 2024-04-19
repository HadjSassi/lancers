import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerContractsPage } from './buyer-contracts.page';

describe('BuyerContractsPage', () => {
  let component: BuyerContractsPage;
  let fixture: ComponentFixture<BuyerContractsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuyerContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
