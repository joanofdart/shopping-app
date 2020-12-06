import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping App';
  slides: string[] = [
    'assets/starships/millennium-falcon.jpg',
    'assets/starships/x-wing.jpg',
    'assets/starships/y-wing.jpeg',
  ];

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
