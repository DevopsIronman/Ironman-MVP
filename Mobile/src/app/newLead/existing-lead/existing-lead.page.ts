import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-existing-lead',
  templateUrl: './existing-lead.page.html',
  styleUrls: ['./existing-lead.page.scss'],
})
export class ExistingLeadPage implements OnInit {
  leads: any;
  count = 0
  constructor(public leadService: LeadService,private router: Router) { }

  ngOnInit() {
    this.leadService.getLead().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.leads = res.data;
        this.count = this.leads.length;
      }
    });
  }

  ionViewWillEnter (){
    this.ngOnInit();
  }

  leadCall(lead) {
    localStorage.setItem("editLeadId", lead.id);
    // this.router.navigate(['/new-lead']);
    console.log(lead)
  }

}
