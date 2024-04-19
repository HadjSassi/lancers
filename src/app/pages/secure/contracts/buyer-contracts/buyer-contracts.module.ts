import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerContractsPageRoutingModule } from './buyer-contracts-routing.module';

import { BuyerContractsPage } from './buyer-contracts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerContractsPageRoutingModule
  ],
  declarations: [BuyerContractsPage]
})
export class BuyerContractsPageModule {}
