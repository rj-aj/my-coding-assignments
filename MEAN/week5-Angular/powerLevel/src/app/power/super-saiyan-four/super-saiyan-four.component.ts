import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnChanges {
@Input() powerLvl: number;
current_power: number;

  ngOnChanges() {
  this.current_power = this.powerLvl ? this.powerLvl * 500 : 0;
  }

}
