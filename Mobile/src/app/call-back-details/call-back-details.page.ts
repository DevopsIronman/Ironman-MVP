import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LeadService} from '../service/lead.service'
import { NavController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-call-back-details',
  templateUrl: './call-back-details.page.html',
  styleUrls: ['./call-back-details.page.scss'],
})
export class CallBackDetailsPage implements OnInit {
  callBackId;
  createdLeadId;
  convertedLeadId;
  customer;
  customerProfile;
  comments;
  callBackfrom: any;
  rescheduleForm: any;
  reschedule:boolean = false;
  minDate: string = new Date().toISOString();


  constructor(private router: Router, public navController:NavController ,public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService) { }

  ngOnInit() {
    this.callBackfrom = this._formBuilder.group({
      comments: new FormControl('',[Validators.required]),
    });
    this.rescheduleForm = this._formBuilder.group({
      callBackDate: new FormControl('',[Validators.required]),
      // callBackTime: new FormControl('',[Validators.required]),
    });
    this.callBackId = this.activeRoute.snapshot.queryParams.callbackId;
    this.createdLeadId = this.activeRoute.snapshot.queryParams.createdLeadId;
    this.convertedLeadId = this.activeRoute.snapshot.queryParams.convertedLeadId;
    this.comments = this.activeRoute.snapshot.queryParams.comments;

    this.leadService.getSingleLead(this.createdLeadId).subscribe((res: any) => {
      console.log(res)
      this.customer = res.data[0];
    });
    this.leadService.getSingleConvertedLeadCB(this.convertedLeadId).subscribe((res: any) => {
      console.log(res)
      this.customerProfile = res.data[0];

    });
    if(this.comments) {
      console.log(this.comments);
      this.callBackfrom.controls["comments"].setValue(this.comments);
    }
  }

  submit(status) {
    console.log(status, this.callBackfrom.value)   
      let data = {
        comments: this.callBackfrom.value.comments,
        status: status,
      }
      if(status) {
        this.leadService.updateTicket(this.callBackId, data ).subscribe((res: any) => {
          console.log(res);
          if(res) {
            this.router.navigate(['/notification/completed'], { queryParams: {completed: 'completed' } }); 
              // this.router.navigate(['/notification/']);
            // this.navController.navigateForward(['/notification']);

          }
        });
      } else {
        this.reschedule = true;
      }  
  }

  submitReschedule(status) {
    let data = {
      callBackDate: this.rescheduleForm.value.callBackDate,
      callBackTime: this.rescheduleForm.value.callBackTime,
    }
    this.leadService.updateTicket(this.callBackId, data ).subscribe((res: any) => {
      console.log(res);
      if(res) {
        this.router.navigate(['/notification/rejected'], { queryParams: {completed: 'completed' } }); 

        // this.navController.navigateBack(['/notification/upcoming']);
      }
    });
  }

}
