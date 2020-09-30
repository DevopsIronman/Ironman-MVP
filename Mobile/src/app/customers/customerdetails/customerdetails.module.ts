import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdetailsPageRoutingModule } from './customerdetails-routing.module';

import { CustomerdetailsPage } from './customerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdetailsPageRoutingModule
  ],
  declarations: [CustomerdetailsPage]
})
export class CustomerdetailsPageModule {}
