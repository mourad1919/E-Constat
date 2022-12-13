import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstatdetailPageRoutingModule } from './constatdetail-routing.module';

import { ConstatdetailPage } from './constatdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstatdetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConstatdetailPage]
})
export class ConstatdetailPageModule {}
