import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string = ""
  hayError: boolean = false;
  paises: Country[] = []
  paisesSugeridos: Country[] = []
  mostrarSugerido: boolean = false

  constructor(private paisService:PaisService) { }

  buscar(termino: string) {
    if (termino === "") return;
    this.mostrarSugerido = false;
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(termino).subscribe(
      paises => {
        console.log(paises);
        this.paises = paises
      }, error => {
        console.log(error);
        this.hayError = true
        this.paises = []
      }
    )
  }

  sugerencias(termino: string) {
    if (termino === "") {
      this.mostrarSugerido = false;
      return;
    }
    this.mostrarSugerido = true;
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.slice(0, 5),
      error => this.paisesSugeridos = []
    )
  }
}
