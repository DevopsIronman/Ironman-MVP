import { Component, OnInit } from '@angular/core';
import { LeadService } from '../service/lead.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  leadsCount: number = 0;
  customerCount: number = 0;
  // allCallbackCount:number =0;
  allCallbackCount: number = 0;
  completedCallbackCount: number = 0;
  pendingCallBackCount: number = 0;
  feedbackCount: number = 0;
  hotLeadCount: number = 0;
  coldLeadCount: number = 0;
  warmLeadCount: number = 0;
  lostLeadCount: number = 0;

  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();
    this.getFeedbacks();
    this.getHotleads();
    this.getColdleads();
    this.getwarmleads();
    this.getLostleads();

  }

  ionViewWillEnter() {
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();
    this.getFeedbacks();
    this.getHotleads();
    this.getColdleads();
    this.getwarmleads();
    this.getLostleads();
  }

  leadCount() {
    this.leadService.getLead().subscribe((res: any) => {
      if (res.success) {
        this.leadsCount = res.data.length;
      }
    });
  }

  customersCount() {
    this.leadService.getCustomer().subscribe((res: any) => {
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
     if (res.success) {
        this.completedCallbackCount = res.data.length;
        this.allCallbackCount = this.completedCallbackCount + this.pendingCallBackCount;
      }
    });
  }

  getFeedbacks() {
    this.leadService.getFeedbacks().subscribe((res: any) => {
      if (res.success) {
        this.feedbackCount = res.data.length;
      }
    });
  }
  getHotleads() {
    this.leadService.getHotleads().subscribe((res: any) => {
      if (res.success) {
        this.hotLeadCount = res.data.length;
      }
    });
  }
  getColdleads() {
    this.leadService.getColdleads().subscribe((res: any) => {
      if (res.success) {
        this.coldLeadCount = res.data.length;
      }
    });
  }
  getwarmleads() {
    this.leadService.getWarmleads().subscribe((res: any) => {
      if (res.success) {
        this.warmLeadCount = res.data.length;
      }
    });
  }
  getLostleads() {
    this.leadService.getLostleads().subscribe((res: any) => {
      if (res.success) {
        this.lostLeadCount = res.data.length;
      }
    });
  }


}
