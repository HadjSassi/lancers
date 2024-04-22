import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancerServicesPageRoutingModule } from './lancer-services-routing.module';

import { LancerServicesPage } from './lancer-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancerServicesPageRoutingModule
  ],
  declarations: [LancerServicesPage]
})
export class LancerServicesPageModule {}
