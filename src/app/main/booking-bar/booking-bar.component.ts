import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-booking-bar',
  templateUrl: './booking-bar.component.html',
  styleUrls: ['./booking-bar.component.scss']
})
export class BookingBarComponent {
  @Input() showFilter : boolean =false;
  @Output() onFilterShow = new EventEmitter<boolean>();
  guest = 5;
  onFilter(){
    console.log("test");
    this.showFilter = !this.showFilter;
    this.onFilterShow.emit(this.showFilter);
  }

  addGuest(type:string){
    if(this.guest <= 0){
      return;
    }
    if(type == 'add'){
      this.guest += 1;
    }
    if(type == 'minus'){
      this.guest -= 1;
    }
  }
}
