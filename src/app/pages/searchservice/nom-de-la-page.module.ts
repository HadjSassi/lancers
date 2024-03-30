import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomDeLaPagePageRoutingModule } from './nom-de-la-page-routing.module';

import { NomDeLaPagePage } from './nom-de-la-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomDeLaPagePageRoutingModule
  ],
  declarations: [NomDeLaPagePage]
})
export class NomDeLaPagePageModule {}
