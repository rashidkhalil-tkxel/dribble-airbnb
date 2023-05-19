import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  showFilter = false;
  viewType = 'grid';
  onFilterShow(val:boolean){
      this.showFilter = val;
  }
  onViewType(val:string){
    this.viewType = val;
}
}
