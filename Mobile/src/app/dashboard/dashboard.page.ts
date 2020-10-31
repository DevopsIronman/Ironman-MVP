import { Component, OnInit } from '@angular/core';
import {LeadService} from '../service/lead.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  leadsCount:number =0;
  customerCount:number =0;
  // allCallbackCount:number =0;
  allCallbackCount:number =0;
  completedCallbackCount:number =0;
  pendingCallBackCount:number =0;
  
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();

  }

  ionViewWillEnter (){
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();

  }
  
  leadCount() {
    this.leadService.getLead().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.leadsCount = res.data.length;
      }
    });
  }

  customersCount() {
    this.leadService.getCustomer().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.customerCount = res.data.length;
      }
    });
  }

  pendingCallback() {
    this.leadService.getCalBack().subscribe((res: any) => {
      if (res.success) {
        this.pendingCallBackCount = res.data.length;
      }
    });
  }

  completedCallbacks() {
    this.leadService.getCalBackcompleted().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.completedCallbackCount = res.data.length;
        this.allCallbackCount = this.completedCallbackCount + this.pendingCallBackCount;
      }
    });
  }


}
