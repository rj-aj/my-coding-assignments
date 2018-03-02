import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnChanges {
@Input() powerLvl: number;
current_power: number;
ngOnChanges() {
  this.current_power = this.powerLvl ? (this.powerLvl * 90) : 0 ;
}

}
