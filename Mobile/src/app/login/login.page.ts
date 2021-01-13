import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthServiceService } from '../service/authentication/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validCheck: boolean = false;
  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private _auth: AuthServiceService,) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  login() {
    var data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
    }
    this._auth.login(data).subscribe((res: any) => {

      if (res.success) {
        this.validCheck = false;

        localStorage.setItem('email', data.email);

        // this.snackBar.open(res.message, "", {
        //     duration: 3000,
        //     horizontalPosition: 'end',
        //     verticalPosition: 'top',
        //     panelClass: ['successSnackbarclass']
        // });


        let rolecheck = res.user.logRole
        if (rolecheck == "admin") {
          localStorage.setItem('logRole', rolecheck)
          this.router.navigate(['/dashboard']);
        }
        this.loginForm.reset();
      } else {
        this.loginForm.controls['email'].setErrors({ 'incorrect': true });
        this.loginForm.controls['password'].setErrors({ 'incorrect': true });
        this.validCheck = true;
      }
    });
  }

}
