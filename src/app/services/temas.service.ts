import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temas } from '../models/temas.model';


@Injectable({
  providedIn: 'root'
})
export class TemasService {
  temas: Temas[];
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/temas/';
  }

  getAll() {
    return this.http.get<Temas[]>(this.baseUrl).toPromise();
  }


  getById(pId) {
    return this.http.get<Temas>(this.baseUrl + pId).toPromise();
  }

  create(pBody) {
    return this.http.post<Temas[]>(this.baseUrl + 'create', pBody).toPromise();
  }

  getSuscritos(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    };
    return this.http.get<Temas[]>('https://devsocial-back.herokuapp.com/api/userTema/dataInner', httpOptions).toPromise();
  }


  updateById(pBody) {
    return this.http.post(this.baseUrl + 'update', pBody).toPromise();
  }
}
