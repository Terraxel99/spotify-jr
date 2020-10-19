import { MessageService } from 'primeng/api';

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService,
              private translateService: TranslateService,) { }

  public warnToast(summaryKey: string, detailKey: string) {
    this.sendToast('warn', summaryKey, detailKey);
  }

  public errorToast(summaryKey: string, detailKey: string) {
    this.sendToast('error', summaryKey, detailKey);
  }

  public successToast(summaryKey: string, detailKey: string) {
    this.sendToast('success', summaryKey, detailKey);
  }

  public infoToast(summaryKey: string, detailKey: string) {
    this.sendToast('info', summaryKey, detailKey);
  }

  /** Adds a toast to the page with the given info */
  private sendToast(severity: string, summaryKey: string, detailKey: string) {
    this.messageService.add({
      severity: severity,
      summary: this.translateService.instant(summaryKey),
      detail: this.translateService.instant(detailKey),
      life: AppConstants.TOAST_TTL,
    });
  }
}
