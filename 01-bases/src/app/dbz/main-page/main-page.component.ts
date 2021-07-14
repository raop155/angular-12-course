import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 1500
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }

  agregarNuevoPersonaje(p: Personaje) {
    this.personajes.push(p)
  }

  constructor(private dbzService: DbzService) {

  }
}
