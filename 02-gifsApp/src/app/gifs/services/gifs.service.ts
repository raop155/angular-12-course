import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "7SXSYlppZqoMEPSzskXYhyLN85Y6RnmD";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  }

  buscarGifs(query: string = ""): void {
    query = query.trim().toLowerCase();
    if (this._historial.includes(query)) return;

    this._historial.unshift(query);
    this._historial = this.historial.splice(0, 10);
    localStorage.setItem("historial", JSON.stringify(this._historial))

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe( (response) => {
      console.log(response.data);
      this.resultados = response.data;
      localStorage.setItem("resultados", JSON.stringify(this.resultados))

    })

  }


}

