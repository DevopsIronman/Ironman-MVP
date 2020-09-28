import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingCustomersPageRoutingModule } from './existing-customers-routing.module';

import { ExistingCustomersPage } from './existing-customers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingCustomersPageRoutingModule
  ],
  declarations: [ExistingCustomersPage]
})
export class ExistingCustomersPageModule {}
