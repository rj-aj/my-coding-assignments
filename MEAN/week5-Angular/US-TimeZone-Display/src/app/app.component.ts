import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  timeNow = new Date();
  timezone = 'PST';
  lastButtonClick = null;

  getDateByZone(timezone) {
    this.timeNow = new Date();
    console.log(timezone);
    if (timezone === 'EST') {
      this.timeNow.setHours(this.timeNow.getHours());
      // console.log(this.lastTimeZoneSelected)
    } else if (timezone === 'CST') {
      this.timeNow.setHours(this.timeNow.getHours() - 1);
    } else if (timezone === 'MST') {
      this.timeNow.setHours(this.timeNow.getHours() - 2);
    } else if (timezone === 'PST') {
      this.timeNow.setHours(this.timeNow.getHours() - 3);
    }
    this.lastButtonClick = timezone;
  }

  clearAll() {
    this.timeNow = null;
    this.timezone = null;
    this.lastButtonClick = null;
  }
}
