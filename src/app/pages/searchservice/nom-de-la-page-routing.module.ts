import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomDeLaPagePage } from './nom-de-la-page.page';

const routes: Routes = [
  {
    path: '',
    component: NomDeLaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomDeLaPagePageRoutingModule {}
