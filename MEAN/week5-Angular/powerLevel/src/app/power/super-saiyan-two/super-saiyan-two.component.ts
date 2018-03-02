import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnChanges {

@Input() powerLvl: number;
current_power: number;

  ngOnChanges() {
    this.current_power = this.powerLvl ? (this.powerLvl * 150) : 0;
  }

}
