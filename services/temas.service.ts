import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temas } from '../models/temas.model';


@Injectable({
  providedIn: 'root'
})
export class TemasService {
  temas: Temas[];
  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Temas[]>('http://localhost:3000/api/temas/').toPromise();
  }


  getById(pId) {
    return this.http.get<Temas>('http://localhost:3000/api/temas/' + pId).toPromise();
  }

  create(pBody) {
    return this.http.post<Temas[]>('http://localhost:3000/api/temas/create', pBody).toPromise();
  }

}
