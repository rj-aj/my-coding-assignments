import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnChanges {
  @Input() powerLvl: number;
  current_power: number;
  ngOnChanges() {
    this.current_power =  this.powerLvl ? this.powerLvl * 10 : 0;
  }
  }

