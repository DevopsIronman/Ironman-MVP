import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingLeadPageRoutingModule } from './existing-lead-routing.module';

import { ExistingLeadPage } from './existing-lead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingLeadPageRoutingModule
  ],
  declarations: [ExistingLeadPage]
})
export class ExistingLeadPageModule {}
