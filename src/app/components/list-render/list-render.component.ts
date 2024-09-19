import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{
  animals = [
    {name: 'Zoe', type: 'Dogo Argentino'},
    {name: 'Alvo', type: 'Dogo Argentino'},
    {name: 'Lua', type: 'Labrador'},
    {name: 'Ogro', type: 'Pitbull'}
  ];
  
  constructor(){}

  ngOnInit(): void {
  }
}
