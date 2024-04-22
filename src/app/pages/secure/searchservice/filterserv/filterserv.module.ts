import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterservPageRoutingModule } from './filterserv-routing.module';

import { FilterservPage } from './filterserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterservPageRoutingModule
  ],
  declarations: [FilterservPage]
})
export class FilterservPageModule {}
