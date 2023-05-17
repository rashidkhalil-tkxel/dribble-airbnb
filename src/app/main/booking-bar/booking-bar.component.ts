import { Component, EventEmitter, Input, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-booking-bar',
  templateUrl: './booking-bar.component.html',
  styleUrls: ['./booking-bar.component.scss']
})
export class BookingBarComponent {
  booking = 'Anywhere';
  @Input() showFilter: boolean = false;
  @Output() onFilterShow = new EventEmitter<boolean>();
  guest = 5;
  onFilter() {
    console.log("test");
    this.showFilter = !this.showFilter;
    this.onFilterShow.emit(this.showFilter);
  }

  addGuest(type: string) {
    if (this.guest <= 0 && type == 'minus') {
      return;
    }
    if (type == 'add') {
      this.guest += 1;
    }
    if (type == 'minus') {
      this.guest -= 1;
    }
  }

  async openDate(e: any, date_input: any) {
    e.preventDefault();
    // $("#date").datepicker().focus();
    await date_input.showPicker();
  }

  selectBooking(bookingText: string) {
    this.booking = bookingText;
  }
}
