import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPage } from './services-page.component'
const routes: Routes = [
  {
    path: '',
    component: ServicesPage
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'consult-service/:id',
    loadChildren: () => import('./consult-service/consult-service.module').then( m => m.ConsultServicePageModule)
  },
  {
    path: 'edit-service/:id',
    loadChildren: () => import('./edit-service/edit-service.module').then( m => m.EditServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}
