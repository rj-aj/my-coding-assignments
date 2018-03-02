import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {
    title = 'Retro Barcode Generator';
    colors = ['Blue', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral',
    'CornflowerBlue', 'Crimson', 'Aqua', 'Aquamarine'];
   randomColorArray = [];
    randomColors(colorArray) {

      for (let i = 0; i < 10; i++) {
        const randNumIndex = (Math.floor(Math.random() * 10)) + 1;
        console.log(this.colors[randNumIndex]);
        this.randomColorArray.push(this.colors[randNumIndex]);
      }
    }
    // Class implements OnInit and define ngOnInit() where this method will be called
    ngOnInit() {
      this.randomColors(this.colors);
    }
  }
