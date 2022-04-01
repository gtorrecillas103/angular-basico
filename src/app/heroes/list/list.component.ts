import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{

  heroes:string[]=['Spiderman','Hulk','Thor','Ironman','Loki']
  deletedHeroe:string = '';

  deleteHeroe(){
    this.deletedHeroe = this.heroes.shift() || '';
    
  }
 
}
