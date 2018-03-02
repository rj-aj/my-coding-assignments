import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnChanges {
@Input() powerLvl: number;
current_power: number;

  ngOnChanges() {
    this.current_power = this.powerLvl ? (this.powerLvl * 250) : 0;
  }

}
