import { MemberService } from 'src/app/core/services/member.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginModel } from 'src/app/core/models/auth/login.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginData: LoginModel;

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(private memberService: MemberService,
              private toastService: ToastService,) { }

  ngOnInit(): void {
    this.resetLoginModel();
  }

  /** Tries to login with the current given credentials */
  public login(event: any): void {
    event.preventDefault();

    this.memberService.login(this.loginData)
      .then(() => {
        this.toastService.successToast('SUCCESS', 'SUCCESSFULLY_LOGGED_IN');
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
