import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule ,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertLeadPageRoutingModule } from './convert-lead-routing.module';

import { ConvertLeadPage } from './convert-lead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertLeadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConvertLeadPage]
})
export class ConvertLeadPageModule {}
