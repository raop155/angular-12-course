import { Component } from '@angular/core';

@Component({
  selector: "app-heroe",
  templateUrl: "./hero.component.html"

})
export class HeroComponent {
  nombre: string = "Ironman";
  edad: number = 45;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase()
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
}
