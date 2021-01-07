import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadService } from '../../service/lead.service'
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-existing-lead',
  templateUrl: './existing-lead.page.html',
  styleUrls: ['./existing-lead.page.scss'],
})
export class ExistingLeadPage implements OnInit {
  leads: any;
  count = 0;
  leadsBackup: any;
  constructor(private callNumber: CallNumber, public leadService: LeadService, private router: Router) { }

  ngOnInit() {
    this.leadService.getLead().subscribe((res: any) => {
      if (res.success) {
        this.leads = res.data;
        this.count = this.leads.length;
        this.leadsBackup = this.leads
      }
    });
  }

  launchDialer(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  async filterList(evt) {
    this.leads = this.leadsBackup;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.leads = this.leads.filter(currentLead => {
      if (currentLead.customerName && searchTerm) {
        return (currentLead.customerName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentLead?.mobileNo?.indexOf(searchTerm.toLowerCase()) > -1 || currentLead?.city?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  leadCall(lead) {
    localStorage.setItem("editLeadId", lead.id);
    // this.router.navigate(['/new-lead']);
  }

}
