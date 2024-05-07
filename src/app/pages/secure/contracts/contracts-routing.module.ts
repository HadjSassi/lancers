import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractsPage } from './contracts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsPage
  },
  {
    path: 'consultation-contract/:id',
    loadChildren: () => import('./consultation-contract/consultation-contract.module').then( m => m.ConsultationContractPageModule)
  },
  {
    path: 'lancer-contracts',
    loadChildren: () => import('./lancer-contracts/lancer-contracts.module').then( m => m.LancerContractsPageModule)
  },
  {
    path: 'buyer-contracts',
    loadChildren: () => import('./buyer-contracts/buyer-contracts.module').then( m => m.BuyerContractsPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsPageRoutingModule {}

