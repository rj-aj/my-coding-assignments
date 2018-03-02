import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [
   { title: 'noteone' },
   { title: 'notetwo' }
  ];

  invoke(event) {
    console.log('"Invoked"', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
