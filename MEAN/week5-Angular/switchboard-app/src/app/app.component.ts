import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
 switches: Array<boolean> = [true, false, true, true, false, false, false, true];

 flipSwitch(idx) {
   this.switches[idx] = !this.switches[idx];
 }
}
