import { LoginModel } from 'src/app/core/models/auth/login.model';
import { MemberService } from 'src/app/core/services/member.service';
import { ToastService } from 'src/app/core/services/toast.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginData: LoginModel;

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(private memberService: MemberService,
              private toastService: ToastService,
              private router: Router) { }

  ngOnInit(): void {
    this.resetLoginModel();
  }

  /** Tries to login with the current given credentials */
  public login(event: any): void {
    event.preventDefault();

    this.memberService.login(this.loginData)
      .then(() => {
        this.toastService.successToast('SUCCESS', 'SUCCESSFULLY_LOGGED_IN');
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.toastService.errorToast('ERROR', 'LOGIN_ERROR');
      })
      .finally(() => {
        this.resetLoginModel();
        this.loginForm.control.markAsPristine();
      });
  }

  /** Resets the login model */
  private resetLoginModel(): void {
    this.loginData = new LoginModel();
  }
}
