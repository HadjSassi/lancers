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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsPageRoutingModule {}
