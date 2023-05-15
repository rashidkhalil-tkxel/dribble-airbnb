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
    class: "house-detail animate__animated animate__slideInRight left"
  };
  // bounce-in-right
  console.log("test",event,);
  this.modalRef = this.modalService.show(template,config);
  this.modalRef.onHidden?.subscribe(res=>{
    this.modalRef?.setClass("animate__animated animate__fadeOutRight")
     console.log("res",res);
  });

  $('#myModal').on('show.bs.modal', function (e:any) {
    console.log("myModal",e);
    $('.modal .modal-dialog').attr('class', 'modal-dialog  flipInX  animated');
})
$('#myModal').on('hide.bs.modal', function (e:any) {
  var anim = $('#exit').val();
  console.log("myModal",e);
})
}

onCloseHouseDetail(event:object){
  console.log("event",event);
  // this.modalRef?.setClass("animate__animated  animate__fadeOutRight"); 
  // $('.modal .modal-dialog').removeClass("animate__fadeOutRight"); 
  console.log( $(".house-detail"));
  const element:any = document.querySelector('.house-detail');
  if (element.classList.contains("animate__slideInRight")) {
    element.classList.remove("animate__slideInRight");
    $(".house-detail").addClass('animate__fadeOutRight') 
  } 
  setTimeout(() => {
    this.modalRef?.hide();
  }, 300);
 
}
}
