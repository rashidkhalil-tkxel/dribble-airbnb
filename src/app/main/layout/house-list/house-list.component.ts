import { Component, EventEmitter, Output } from '@angular/core';
import { HouseDataTypes, housesData } from './houses';
import { numberWithCommas } from 'src/app/directives/utilities';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent {
  data: HouseDataTypes[] = housesData;
  @Output() onHouseDetail = new EventEmitter<HouseDataTypes>();
  numberWithCommas = numberWithCommas;

  focusIn:boolean = false;
  openHouseDetails(house:HouseDataTypes) {
    if(this.focusIn){
      return;
    }
    this.onHouseDetail.emit(house)
  }

  doFavourite(house:HouseDataTypes){
  
    house.isFavourite = !house.isFavourite;
    console.log("house",house)
  }

  focuslost(){
    this.focusIn = false;
  }

  focus(){
    this.focusIn = true;
  }
  
}
