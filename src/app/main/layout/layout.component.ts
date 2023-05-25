import { Component, EventEmitter, Input, Output,Renderer2,TemplateRef } from '@angular/core';
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
@Input() viewType : string = 'grid';
@Output() onFilterShow = new EventEmitter<boolean>();
house!:HouseDataTypes;
modalRef?: BsModalRef;
constructor(private modalService: BsModalService,private renderer: Renderer2) {}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
onFilterShowReceiver(event:boolean){
  this.renderer.removeClass(document.body, 'noScroll');
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
    class: "house-detail animate__animated animate__slideInRight"
  };
  // bounce-in-right
  console.log("test",event,);
  this.modalRef = this.modalService.show(template,config);
  setTimeout(() => {
    const element:any = document.querySelector('.house-detail');
  if (element.classList.contains("animate__animated")) {
    element.classList.remove("animate__slideInRight");
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
    element.classList.remove("animate__slideInRight");
    $(".house-detail").addClass('animate__fadeOutRight') 
  // } 
  setTimeout(() => {
    this.modalRef?.hide();
  }, 300);
 
}
}
