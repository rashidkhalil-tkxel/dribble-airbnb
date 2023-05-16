import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  constructor(){
    document.body.style.backgroundImage = "url('https://image.ibb.co/iKgVxn/chumma.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.background = "cover";
    document.body.style.backgroundPosition = "right 70px";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }
}
