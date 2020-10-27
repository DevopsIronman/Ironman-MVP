import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule ,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallBackDetailsPageRoutingModule } from './call-back-details-routing.module';

import { CallBackDetailsPage } from './call-back-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CallBackDetailsPageRoutingModule
  ],
  declarations: [CallBackDetailsPage]
})
export class CallBackDetailsPageModule {}
