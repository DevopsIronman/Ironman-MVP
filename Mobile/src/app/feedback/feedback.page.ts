import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../service/lead.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  rate = 5;
  feedBackForm: any;

  constructor(private router: Router, private _formBuilder: FormBuilder, public leadService: LeadService) { }

  ngOnInit() {
    this.feedBackForm = this._formBuilder.group({
      customerName: new FormControl('',[Validators.required]),
      companyName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      mobileNo: new FormControl('',[Validators.required, Validators.maxLength(11),Validators.minLength(10)]),
      rate: new FormControl(),
      satisfied: new FormControl(),
      accessibleManner: new FormControl(),
      problem: new FormControl(),
    });
  }

  submit() {
    console.log(this.feedBackForm.value);
    this.leadService.addFeedback(this.feedBackForm.value).subscribe((res: any) => {
      console.log(res);
      this.feedBackForm.reset();
      this.router.navigate(['/dashboard']);
    })
  }

}
