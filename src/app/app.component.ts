import { PrimeNGConfig } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'spotify-jr';

  constructor(private primengConfig: PrimeNGConfig,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('en');
  }
}
