import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.servive';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }



constructor() {}



}
