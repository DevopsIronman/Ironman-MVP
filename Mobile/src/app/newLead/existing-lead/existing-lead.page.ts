import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-existing-lead',
  templateUrl: './existing-lead.page.html',
  styleUrls: ['./existing-lead.page.scss'],
})
export class ExistingLeadPage implements OnInit {
  leads: any;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getLead().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.leads = res.data;
      }
    });
  }

}
