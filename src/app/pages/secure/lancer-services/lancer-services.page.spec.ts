import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancerServicesPage } from './lancer-services.page';

describe('LancerServicesPage', () => {
  let component: LancerServicesPage;
  let fixture: ComponentFixture<LancerServicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancerServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
