import { Component } from '@angular/core'; 
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    // fader,
    // stepper
  ]
})
export class AppComponent {
  title = 'dribble-airbnb';
}
