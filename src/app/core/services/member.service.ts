import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth, User } from 'firebase/app';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { LoginModel } from '../models/auth/login.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public currentMember = new BehaviorSubject<User>(null);

  constructor(public auth: AngularFireAuth) { 
    this.auth.authState.subscribe((user) => {
      this.setUser(user);
    });
  }

  /** Tries to login with the given data */
  public login(loginData: LoginModel): Promise<auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(loginData.email, loginData.password);
  }

  /** Logs out */
  public logout(): Promise<void> {
    return this.auth.signOut();
  }

  /** Sets the current user to the given value */
  private setUser(user: User) {
    console.log(user);
    if (!user) {
      this.currentMember.next(null);
    } else {
      this.currentMember.next(user);
    }
  }
}
