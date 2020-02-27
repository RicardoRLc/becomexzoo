import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:4200/animal';

  constructor(private http: HttpClient) { }

  getAnimal(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);

  }

  criarAnimal(animal: object): Observable<Object> {
    //return this.http.post(`${this.baseUrl}`, animal);
    //Método chumbado pois na chamada do F12 não está montando a URL de forma correta, URL + Rota
    return this.http.post("http://localhost:3000/animal/", "");
    //http://localhost:3000/animal
  }

  editarAnimal(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);

  }

  deletarAnimal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });

  }

  listaAnimal(): Observable<any> {
    //return this.http.get(`${this.baseUrl}`);
    return this.http.get("http://localhost:3000/animal/");
  }
}
