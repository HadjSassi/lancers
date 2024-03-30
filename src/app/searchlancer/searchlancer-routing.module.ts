import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchlancerPage } from './searchlancer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchlancerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchlancerPageRoutingModule {}
