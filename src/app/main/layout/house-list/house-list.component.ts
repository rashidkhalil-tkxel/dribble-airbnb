import { Component, EventEmitter, Output } from '@angular/core';
import { HouseDataTypes, housesData } from './houses';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent {
  data: HouseDataTypes[] = housesData;
  @Output() onHouseDetail = new EventEmitter<HouseDataTypes>();

  openHouseDetails(house:HouseDataTypes) {
    this.onHouseDetail.emit(house)
  }

  doFavourite(house:HouseDataTypes){
  
    house.isFavourite = !house.isFavourite;
    console.log("house",house)
  }
  
}
