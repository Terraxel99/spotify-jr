import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  /** Whether the windows is mobile sized or not */
  public isMobile: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    window.addEventListener('resize', () => {
      this.checkBrowserWidth();
    });
  }

  /** Checks the width of the browser and sets if it is mobile sized or not */
  private checkBrowserWidth(): void {
    this.isMobile.next(window.innerWidth <= 1024);
  }
}
