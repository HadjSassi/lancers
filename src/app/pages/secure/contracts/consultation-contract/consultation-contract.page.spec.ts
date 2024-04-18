import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationContractPage } from './consultation-contract.page';

describe('ConsultationContractPage', () => {
  let component: ConsultationContractPage;
  let fixture: ComponentFixture<ConsultationContractPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultationContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
