import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LeadService} from '../../service/lead.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.page.html',
  styleUrls: ['./new-lead.page.scss'],
})
export class NewLeadPage implements OnInit {
  leadForm: any;
  constructor( private router: Router, private _formBuilder: FormBuilder, public leadService: LeadService ) { }

  ngOnInit() {
      this.leadForm = this._formBuilder.group({
        customerName: new FormControl(),
        companyName: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
        gstIn: new FormControl(),
        mobileNo: new FormControl(),
        mobileNo2: new FormControl(),
        mailId: new FormControl(),
        mailId2: new FormControl(),
        breakingSizeVariety: new FormControl(),
        excavatorModel: new FormControl(),
        backhoeLoader: new FormControl(),
        machineCapacity: new FormControl(),
        machineMakeModel: new FormControl(),
        existingbreaker: new FormControl(),
        pipelines: new FormControl(),
        leadAssigned: new FormControl(),
        leadAssignedTo: new FormControl(),
        convertedStatus: new FormControl(),
        recommendedBreaker: new FormControl(),
  
      });
    }
  
    submit(data) {
      debugger;
      console.log(data, this.leadForm);
      this.leadService.addLead(this.leadForm.value).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("newLeadId", res.data.id);
          console.log(res)
          if(data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }});

    }

    setBreaker(event) {
      console.log(event)
      if(event.target.value == "Hyundai R 110" || event.target.value == "Hyundai R 140"|| event.target.value == "Tatahitachi EX 110" || event.target.value == "Tatahitachi EX 140"
      || event.target.value == "Tatahitachi EX 130" || event.target.value == "Zaxies ZX 140" || event.target.value == "Kobelco SK 140" || event.target.value == "Komatsu PC 130") {
        // this.leadForm.controls["recommendedBreaker"].value = "500S";
        this.leadForm.controls["recommendedBreaker"].setValue('500S');
      } else {
        // this.leadForm.controls["recommendedBreaker"].value = "810HS";
        this.leadForm.controls["recommendedBreaker"].setValue('810HS');
      }
    }
  

}
