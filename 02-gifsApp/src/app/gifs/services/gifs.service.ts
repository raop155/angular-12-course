import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "7SXSYlppZqoMEPSzskXYhyLN85Y6RnmD";
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string = ""): void {
    query = query.trim().toLowerCase();
    if (this._historial.includes(query)) return;

    this._historial.unshift(query);
    this._historial = this.historial.splice(0, 10);
    console.log(this._historial);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe( (response: any) => {
      console.log(response.data);
    })

  }


}

