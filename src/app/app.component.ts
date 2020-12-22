import { Component } from '@angular/core';

import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faCloudSunRain, faHome } from '@fortawesome/free-solid-svg-icons';

import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faCloudSunRain = faCloudSunRain;
  faHome = faHome;
  faBookmark = faBookmark;

  isCollapsed = true;

  constructor() {
    moment.locale('pt-br');
  }
}
