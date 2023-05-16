import { Component, EventEmitter, Input, Output,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { HouseDataTypes } from './house-list/houses';
declare var $:any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
@Input() showFilter : boolean =false;
@Output() onFilterShow = new EventEmitter<boolean>();
house!:HouseDataTypes;
modalRef?: BsModalRef;
constructor(private modalService: BsModalService) {}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
onFilterShowReceiver(event:boolean){
  this.onFilterShow.emit(false);
}

onHouseDetail(event:HouseDataTypes,template: TemplateRef<any>){
  this.house = event;
  let config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    id:"myModal",
    ignoreBackdropClick: false,
    class: "house-detail divAnimation-enter "
  };
  // bounce-in-right
  console.log("test",event,);
  this.modalRef = this.modalService.show(template,config);
  setTimeout(() => {
    const element:any = document.querySelector('.house-detail');
  if (element.classList.contains("divAnimation-enter")) {
    element.classList.remove("divAnimation-enter");
    // $(".house-detail").addClass('animate__fadeOutRight') 
  } 
  }, 1000);
}

onCloseHouseDetail(event:object){
  console.log("event",event);
  // this.modalRef?.setClass("animate__animated  animate__fadeOutRight"); 
  // $('.modal .modal-dialog').removeClass("animate__fadeOutRight"); 
  console.log( $(".house-detail"));
  const element:any = document.querySelector('.house-detail');
  // if (element.classList.contains("animate__slideInRight")) {
    element.classList.remove("divAnimation-enter");
    $(".house-detail").addClass('divAnimation-leave') 
  // } 
  setTimeout(() => {
    this.modalRef?.hide();
  }, 300);
 
}
}
