import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LeadService} from '../../service/lead.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.page.html',
  styleUrls: ['./new-lead.page.scss'],
})
export class NewLeadPage implements OnInit {
  leadForm: any;
  leads: any;
  leadId:any;
  constructor( private router: Router, public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService ) { }

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
        // breakingSizeVariety: new FormControl(),
        type: new FormControl(),
        // backhoeLoader: new FormControl(),
        purpose: new FormControl(),
        product: new FormControl(),
        machineMakeModel: new FormControl(),
        existingBreaker: new FormControl(),
        pipelines: new FormControl(),
        leadAssigned: new FormControl(),
        leadAssignedTo: new FormControl(),
        convertedStatus: new FormControl(),
        recommendedBreaker: new FormControl(),
  
      });
      this.leadId = this.activeRoute.snapshot.queryParams.lead;
      
      if(this.leadId) {
        this.leadService.getSingleLead(this.leadId).subscribe((res: any) => {
          console.log(res)
          if (res.success) {
            this.leads = res.data[0];
            this.leadForm.controls["customerName"].setValue(this.leads.customerName);
            this.leadForm.controls["companyName"].setValue(this.leads.companyName);
            this.leadForm.controls["address"].setValue(this.leads.address);
            this.leadForm.controls["city"].setValue(this.leads.city);
            this.leadForm.controls["state"].setValue(this.leads.state);
            this.leadForm.controls["pincode"].setValue(this.leads.pincode);
            this.leadForm.controls["gstIn"].setValue(this.leads.gstIn);
            this.leadForm.controls["mobileNo"].setValue(this.leads.mobileNo);
            this.leadForm.controls["mobileNo2"].setValue(this.leads.mobileNo2);
            this.leadForm.controls["mailId"].setValue(this.leads.mailId);
            this.leadForm.controls["breakingSizeVariety"].setValue(this.leads.breakingSizeVariety);
            this.leadForm.controls["excavatorModel"].setValue(this.leads.excavatorModel);
            this.leadForm.controls["backhoeLoader"].setValue(this.leads.backhoeLoader);
            this.leadForm.controls["machineCapacity"].setValue(this.leads.machineCapacity);
            this.leadForm.controls["machineMakeModel"].setValue(this.leads.machineMakeModel);
            this.leadForm.controls["existingBreaker"].setValue(this.leads.existingBreaker);
            this.leadForm.controls["pipelines"].setValue(this.leads.pipelines);
            this.leadForm.controls["leadAssigned"].setValue(this.leads.leadAssigned);
            this.leadForm.controls["leadAssignedTo"].setValue(this.leads.leadAssignedTo);
            this.leadForm.controls["convertedStatus"].setValue(this.leads.convertedStatus);
            this.leadForm.controls["recommendedBreaker"].setValue(this.leads.recommendedBreaker);
            
          }
        });
      }
    }
  
    submit(data) {
      
      console.log(data, this.leadForm);
      if(this.leads?.id) {
        this.leadService.updateLead(this.leads.id, this.leadForm.value).subscribe((res: any) => {
          if (res.success) {
            localStorage.setItem("existingLead", this.leads.id);
            localStorage.setItem("newLeadId", this.leads.id);
            console.log(res)
            if(data == 'lead') {
              this.router.navigate(['/existing-lead']);
            }
          }});
      } else {
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

    setBreaker(event) {
      console.log(event)
      if(event.target.value == "Hyundai R 110" || event.target.value == "Hyundai R 140"|| event.target.value == "Tatahitachi EX 110" || event.target.value == "Tatahitachi EX 140"
      || event.target.value == "Tatahitachi EX 130" || event.target.value == "Zaxies ZX 140" || event.target.value == "Kobelco SK 140" || event.target.value == "Komatsu PC 130") {
        // this.leadForm.controls["recommendedBreaker"].value = "500S";
        this.leadForm.controls["recommendedBreaker"].setValue('500S');
      } else if (event.target.value == 'JCB') {
        this.leadForm.controls["recommendedBreaker"].setValue('435S');
      }else if (event.target.value == 'CAT') {
        this.leadForm.controls["recommendedBreaker"].setValue('450S');
      }else {
        // this.leadForm.controls["recommendedBreaker"].value = "810HS";
        this.leadForm.controls["recommendedBreaker"].setValue('810HS');
      }
    }
  

}
