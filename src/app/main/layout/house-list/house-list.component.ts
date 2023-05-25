import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HouseDataTypes, housesData } from './houses';
import { numberWithCommas } from 'src/app/directives/utilities';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent {
  data: HouseDataTypes[] = housesData;
  @Output() onHouseDetail = new EventEmitter<HouseDataTypes>();
  numberWithCommas = numberWithCommas;
  @Input() viewType : string = 'grid';
  focusIn:boolean = false;
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

  page= 1;
  pageSize = 5;
	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
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
