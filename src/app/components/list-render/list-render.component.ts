import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{
  animals: Animal[] = [
    {name: 'Zoe', type: 'Dogo Argentino', age: 3},
    {name: 'Alvo', type: 'Dogo Argentino', age: 4},
    {name: 'Lua', type: 'Labrador', age: 2},
    {name: 'Ogro', type: 'Pitbull', age: 3},
    {name: 'pumba', type: 'Dogo', age: 3}
  ];
  
  animal: Animal = {
    name: 'teste',
    type: 'alguma',
    age: 10
  }

  animalDetails = '';

  constructor(private listService: ListService){}

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    console.log('Removendo Animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
}
