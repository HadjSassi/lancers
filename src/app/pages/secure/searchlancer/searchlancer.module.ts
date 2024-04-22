import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchlancerPageRoutingModule } from './searchlancer-routing.module';

import { SearchlancerPage } from './searchlancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchlancerPageRoutingModule
  ],
  declarations: [SearchlancerPage]
})
export class SearchlancerPageModule {}
