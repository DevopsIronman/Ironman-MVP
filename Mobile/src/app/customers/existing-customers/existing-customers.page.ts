import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-existing-customers',
  templateUrl: './existing-customers.page.html',
  styleUrls: ['./existing-customers.page.scss'],
})
export class ExistingCustomersPage implements OnInit {
  customers: any;
  customersBackup: any;
  count=0;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.customers = res.data;
        this.count = this.customers.length;
        this.customersBackup = this.customers;
      }
    });
  }

  async filterList(evt) {
    this.customers = this.customersBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.customers = this.customers.filter(currentLead => {
      if (currentLead.customerName && searchTerm) {
        return (currentLead.customerName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentLead?.mobileNo?.indexOf(searchTerm.toLowerCase()) > -1 ||  currentLead?.city?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  ionViewWillEnter (){
    this.ngOnInit();
  }

  view(i) {
    console.log(i)
    this.customers[i].open = true
  }
  viewtoggle(i) {
    console.log(i)
    this.customers[i].open = false
  }

}
