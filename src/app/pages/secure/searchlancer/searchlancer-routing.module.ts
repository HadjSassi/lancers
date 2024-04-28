import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchlancerPage } from './searchlancer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchlancerPage
  },
  {
    path: 'consult-lancer/:id',
    loadChildren: () => import('./consult-lancer/consult-lancer.module').then( m => m.ConsultLancerPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchlancerPageRoutingModule {}
