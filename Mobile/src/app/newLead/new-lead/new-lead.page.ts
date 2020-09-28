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
        customerLocation: new FormControl(),
        mobileNo: new FormControl(),
        mailId: new FormControl(),
        breakingSizeVariety: new FormControl(),
        excavatorModel: new FormControl(),
        backLoader: new FormControl(),
        machineCapacity: new FormControl(),
        machineMakeModel: new FormControl(),
        existingbreaker: new FormControl(),
        pipelines: new FormControl(),
        leadAssignedTo: new FormControl(),
        convertedStatus: new FormControl(),
  
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
  

}
