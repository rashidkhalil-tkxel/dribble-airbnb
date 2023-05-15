import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core'; 
import { HouseDataTypes } from '../house-list/houses';
declare var $:any;
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
  // animations: [
  //   trigger('bounce', [transition('* => *', useAnimation(flipInX))])
  // ]
  // animations: [ 
  //   trigger("button", [
  //     transition(':enter', [
  //       style({  opacity: 0, x: '100%' }),
  //       animate('0.5s',  style({  opacity: 1, x: 0 })),
  //     ]),
  //     transition(':leave', [
  //       animate('0.5s', style({ x: '100%', opacity: 0 })),
  //     ]),
  //   ]),
  //   trigger("div", [
  //     transition(':enter', [
  //       style({ x: '100%' }),
  //       animate('0.5s',  style({  x: 0 })),
  //     ]),
  //     transition(':leave', [
  //       animate('0.5s', style({ x: '100%' })),
  //     ]),
  //   ]),
// trigger('fadeSlideInOut', [
// 	transition(':enter', [
// 		style({opacity: 0, x: '100%' }),
// 		animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
// 	]),
// 	transition(':leave', [
// 		animate('500ms', style({ x: '100%', opacity: 0 })),
// 	]),
// ]),
// trigger('showArrow',
// [            
//     state('*', style({opacity: 0})),
//     state('in', style({opacity: 1})),
//     state('out', style({opacity: 0})),

//     transition('* => in', [
//        animate(15000)    
//     ]),

//     transition('* => out', [
//         animate(200)
//     ])
// ])
  // ]
})
export class HouseDetailsComponent {

  

  @Input() house!:HouseDataTypes;
  @Output() onCloseHouseDetail = new EventEmitter<Object>();

  closeHouseDetail(){
    this.onCloseHouseDetail.emit('close')
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  ngOnInit(){ 
    $('.modal').on('hide.bs.modal', function (e:any) {
      console.log("ete");
      $('.modal .modal-dialog').attr('class', 'modal-dialog  fadeOut  animated');
    })
  }

  doFavourite(house:HouseDataTypes){
  
    house.isFavourite = !house.isFavourite;
    console.log("house",house)
  }
}