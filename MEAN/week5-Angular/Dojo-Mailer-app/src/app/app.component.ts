import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo - Mail';
  emails = [{
    email: <string>'Bill@gates.com',
    importance: <boolean>true,
    subject: <string>'New Windows',
    content: <string>'Windows XI will launch in year 2100.'
  },
  {
    email: <string>'ada@LOVELACE.com',
    importance: <boolean>true,
    subject: <string>'Programming',
    content: <string>'Enchantress of Numbers.'
  },
  {
    email: <string>'john@carmac.com',
    importance: <boolean>false,
    subject: <string>'Updated Algo',
    content: <string>'New algorithm for shadow volumes.'
  },
  {
    email: <string>'gabe@newel.com',
    importance: <boolean>false,
    subject: <string>'HL3!',
    content: <string>'Just kidding...'
  }];
}
