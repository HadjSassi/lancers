import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancerServicesPage } from './lancer-services.page';

const routes: Routes = [
  {
    path: '',
    component: LancerServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancerServicesPageRoutingModule {}
