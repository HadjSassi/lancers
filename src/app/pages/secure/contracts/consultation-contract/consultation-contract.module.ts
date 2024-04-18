import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationContractPageRoutingModule } from './consultation-contract-routing.module';

import { ConsultationContractPage } from './consultation-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultationContractPageRoutingModule
  ],
  declarations: [ConsultationContractPage]
})
export class ConsultationContractPageModule {}
