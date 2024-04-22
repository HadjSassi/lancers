import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NomDeLaPagePage } from './nom-de-la-page.page';

describe('NomDeLaPagePage', () => {
  let component: NomDeLaPagePage;
  let fixture: ComponentFixture<NomDeLaPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NomDeLaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
