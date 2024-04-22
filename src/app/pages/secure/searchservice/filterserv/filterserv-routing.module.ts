import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterservPage } from './filterserv.page';

const routes: Routes = [
  {
    path: '',
    component: FilterservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterservPageRoutingModule {}
