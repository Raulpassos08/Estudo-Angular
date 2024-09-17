import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
 
  name: string = 'Raul';
  age: number = 20;
  job = "Front-End"
  car = ["Ferrari", 2024]

}
