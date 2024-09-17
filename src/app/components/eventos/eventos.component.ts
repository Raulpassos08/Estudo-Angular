import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  show: boolean = false

  constructor(){}

  ngOnInit(): void {} 

  displayYes(): void{
    this.show = true
  }

  displayNo(): void{
    this.show = false
  }

  back(): void{
    this.show = !this.show // toggle
  }
}
