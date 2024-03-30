import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultServicePageRoutingModule } from './consult-service-routing.module';

import { ConsultServicePage } from './consult-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultServicePageRoutingModule
  ],
  declarations: [ConsultServicePage]
})
export class ConsultServicePageModule {}
