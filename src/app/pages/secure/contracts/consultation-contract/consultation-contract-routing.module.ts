import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationContractPage } from './consultation-contract.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationContractPageRoutingModule {}
