import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancerContractsPageRoutingModule } from './lancer-contracts-routing.module';

import { LancerContractsPage } from './lancer-contracts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancerContractsPageRoutingModule
  ],
  declarations: [LancerContractsPage]
})
export class LancerContractsPageModule {}
