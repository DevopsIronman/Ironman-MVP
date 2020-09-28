import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-existing-customers',
  templateUrl: './existing-customers.page.html',
  styleUrls: ['./existing-customers.page.scss'],
})
export class ExistingCustomersPage implements OnInit {
  customers: any;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.customers = res.data;
      }
    });
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
