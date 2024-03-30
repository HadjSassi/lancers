import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultServicePage } from './consult-service.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultServicePageRoutingModule {}
