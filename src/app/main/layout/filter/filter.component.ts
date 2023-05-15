import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],

})
export class FilterComponent {
  @Output() onFilterShow = new EventEmitter<boolean>();

  onFilterDivClick() {
    // this.onFilterShow.emit(false);
  }

  ngOnInit() {
    // const targetDiv:any = document.querySelector('#filter')

    // document.addEventListener('click', (e) => {
    //   const isClickedInsideDiv = e.composedPath().includes(targetDiv)

    //   if (isClickedInsideDiv) {
    //     console.log('clicked inside of div')
    //   } else {
    //     console.log('clicked outside of div')
    //   } 
    // })
    let popup: any = document.querySelector('#filter-back')
    popup.addEventListener('click', (e: any) => {
      if (!e.target.closest('.filter')) {
        console.log('clicked outside of div');
        this.onFilterShow.emit(false);
      } else {
        console.log('clicked inside of div')
      }
    }).bind(this)
  }
}
