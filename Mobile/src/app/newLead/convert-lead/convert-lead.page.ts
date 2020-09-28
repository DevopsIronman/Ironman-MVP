import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LeadService} from '../../service/lead.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-convert-lead',
  templateUrl: './convert-lead.page.html',
  styleUrls: ['./convert-lead.page.scss'],
})
export class ConvertLeadPage implements OnInit {
  leadForm: any;
  constructor( private router: Router, private _formBuilder: FormBuilder, public leadService: LeadService ) { }

  ngOnInit() {
    this.leadForm = this._formBuilder.group({
      recommendedBreaker: new FormControl(),
      price: new FormControl(),
      warranty: new FormControl(),
      serviceFrequency: new FormControl(),
      lead: new FormControl(),
      machineCapacity: new FormControl(),
      followUpTask: new FormControl(),
      result: new FormControl(),
      quoteOrInvoice: new FormControl(),
    });
  }

  submit(data) {
    let id = localStorage.getItem('newLeadId');
    let convertedData = this.leadForm.value;
    convertedData.createdLeadId  = id;
    this.leadService.convertLead(convertedData).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        localStorage.setItem("convertedLeadId", res.data.id);
        console.log(res)
        if(data == 'lead') {
          this.router.navigate(['/existing-lead']);
        }
      }});

  }

}
