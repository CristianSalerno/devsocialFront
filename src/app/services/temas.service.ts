import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temas } from '../models/temas.model';
import { tokenName } from '@angular/compiler';


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

   getSuscritos(token) {
     const httpOptions = {
       headers: new HttpHeaders({
         user_token: token,
       })
     };
     return this.http.get<Temas[]>('http://localhost:3000/api/userTema/dataInner', httpOptions).toPromise();
   }


}
