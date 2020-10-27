import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.page.html',
  styleUrls: ['./customerdetails.page.scss'],
})
export class CustomerdetailsPage implements OnInit {
  id:any;
  customer: any;
  customerProfile: any;
  serviceDue:any;
  constructor(public activeRoute: ActivatedRoute, public leadService: LeadService ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams.id;
    this.serviceDue = this.activeRoute.snapshot.queryParams.serviceDue;
    console.log(this.id)
    this.leadService.getCustomerDetails(this.id).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.customer = res.data;

        this.customerProfile = this.customer.CustomerProfiles[0];
      }
    });
  }

}
