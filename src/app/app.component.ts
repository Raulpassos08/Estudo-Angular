import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Joaquim'
  userData = {
    email : 'joaquim@gmail.com'
  }

  title = 'ProjectNew';
}
