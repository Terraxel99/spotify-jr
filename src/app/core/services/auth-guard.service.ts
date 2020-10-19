import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private memberService: MemberService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    var currentMember = this.memberService.currentMember.value;
    
    if (currentMember) {
      return true;
    } else{
      return this.router.parseUrl('/login');
    }
  }
}
