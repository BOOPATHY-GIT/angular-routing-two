import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-two';
  constructor(
    private matomoInjector: MatomoInjector
  ) {
    this.matomoInjector.init('https://boopathy-git.matomo.cloud/', 3);
  }
}
