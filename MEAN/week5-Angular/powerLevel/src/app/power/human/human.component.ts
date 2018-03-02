import { Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnChanges {
@Input() powerLvl: number;
current_power: number;
ngOnChanges() {
  this.current_power =  this.powerLvl ? this.powerLvl * 1 : 0;
}
}
