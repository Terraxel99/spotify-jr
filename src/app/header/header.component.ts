import { OverlayPanel } from 'primeng/overlaypanel';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomMemberModel } from '@app/core/models/auth';
import { MemberService, ResponsiveService, ToastService } from '@app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  /** The current member */
  public member: CustomMemberModel;

  /** Whether the window is mobile sized or not */
  public isMobile = true;

  @ViewChild('userPanel', { static: false }) userOverlayPanel: OverlayPanel;

  constructor(private memberService: MemberService,
              private toastService: ToastService,
              private responsiveService: ResponsiveService,
              private router: Router
  ) { }

  /** Whether the current member has a profile image or not */
  public get memberHasImage(): boolean {
    return this.member && this.member.image?.length > 0;
  }

  ngOnInit(): void {
    this.registerMobileEvent();
    // Everytime the user changes, we get the data in our component.
    this.memberService.currentMember.subscribe((user) => {
      if (!user) {
        this.member = undefined;
      } else {
        this.member = new CustomMemberModel(user);
      }
    });
  }

  /** Called to log the user out. This will call the member service to achieve the action. */
  public logout(): void {
    this.memberService.logout()
      .then(() => {
        this.toastService.successToast('SUCCESS', 'SUCCESSFULLY_LOGGED_OUT');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.toastService.errorToast('ERROR', 'LOGOUT_ERROR');
      })
      .finally(() => {
        this.closeUserOverlayPanel();
      });
  }

  /** Closes the user overlay panel */
  private closeUserOverlayPanel(): void {
    this.userOverlayPanel.hide();
  }

  /** Registers the subscription to keep updated about the fact the screen is mobile sized or not */
  private registerMobileEvent(): void {
    this.responsiveService.isMobile
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }
}
