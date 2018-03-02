import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [
    {
      _id: 1,
      title: 'first task',
      completed: false,
    },
    {
      _id: 2,
      title: 'second task',
      completed: false
    }
  ];
  constructor() { }
}


