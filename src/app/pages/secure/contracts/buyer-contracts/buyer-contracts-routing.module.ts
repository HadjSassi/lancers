import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerContractsPage } from './buyer-contracts.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerContractsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerContractsPageRoutingModule {}
