import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancerContractsPage } from './lancer-contracts.page';

const routes: Routes = [
  {
    path: '',
    component: LancerContractsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancerContractsPageRoutingModule {}
