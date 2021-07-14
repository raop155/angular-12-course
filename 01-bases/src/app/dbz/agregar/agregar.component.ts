import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
