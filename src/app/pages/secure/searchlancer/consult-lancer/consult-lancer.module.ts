import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultLancerPageRoutingModule } from './consult-lancer-routing.module';

import { ConsultLancerPage } from './consult-lancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultLancerPageRoutingModule
  ],
  declarations: [ConsultLancerPage]
})
export class ConsultLancerPageModule {}
