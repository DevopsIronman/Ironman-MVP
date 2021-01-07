import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../../service/lead.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-convert-lead',
  templateUrl: './convert-lead.page.html',
  styleUrls: ['./convert-lead.page.scss'],
})
export class ConvertLeadPage implements OnInit {
  dateCheck: boolean = false;
  leadForm: any;
  leads: any;
  convertedLeadId: any;
  leadId: any;
  minDate: string = new Date().toISOString();
  callBackdate;
  constructor(private router: Router, public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService) { }

  ngOnInit() {
    this.leadForm = this._formBuilder.group({
      price: new FormControl(),
      warranty: new FormControl(),
      serviceFrequency: new FormControl("", Validators.required),
      followUpTask: new FormControl(),
      result: new FormControl(),
      quoteOrInvoice: new FormControl(),
      callBack: new FormControl(),
      callBackDate: new FormControl(),
      callStatus: new FormControl(),



    });
    this.leadId = this.activeRoute.snapshot.queryParams.lead;
    if (this.leadId) {
      this.leadService.getSingleConvertedLead(this.leadId).subscribe((res: any) => {
        if (res.success) {
          if (res.data.length > 0) {
            this.leads = res.data[0];
            this.convertedLeadId = this.leads.id;
            this.leadForm.controls["price"].setValue(this.leads.price);
            this.leadForm.controls["warranty"].setValue(this.leads.warranty);
            this.leadForm.controls["serviceFrequency"].setValue(this.leads.serviceFrequency);
            this.leadForm.controls["callBack"].setValue(this.leads.callBack);
            this.leadForm.controls["callBackDate"].setValue(this.leads.callBackDate);
            this.leadForm.controls["callStatus"].setValue(this.leads.callStatus);
            this.leadForm.controls["followUpTask"].setValue(this.leads.followUpTask);
            this.leadForm.controls["result"].setValue(this.leads.result);
            this.leadForm.controls["quoteOrInvoice"].setValue(this.leads.quoteOrInvoice);
            this.callBackdate = new Date(this.leads.callBackDate).toISOString();
          }
        }
      });
    }

  }

  datepicker(event) {
    if (event.target.value == 'yes') {
      this.dateCheck = true;
    } else {
      this.dateCheck = false;
    }

  }

  submit(data) {
    let id = localStorage.getItem('newLeadId');
    localStorage.setItem('price', this.leadForm.value.price);
    let convertedData = this.leadForm.value;
    convertedData.createdLeadId = (this.leadId) ? this.leadId : id;
    if (this.convertedLeadId) {
      this.leadService.updateConvertedLead(this.convertedLeadId, convertedData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("convertedLeadId", this.convertedLeadId);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });

    } else {
      this.leadService.convertLead(convertedData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("convertedLeadId", res.data.id);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });
    }

  }

}
