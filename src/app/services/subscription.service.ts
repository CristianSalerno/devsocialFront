import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/subscription/';
  }

  insert(pToken: string, pTemaId: number) {
    const body = {
      idTema: pTemaId,
      state: 'pending'
    };
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post(this.baseUrl + 'insert', body, httpOptions).toPromise();
  }
  getByTemaState(body) {
    return this.http.post(this.baseUrl + 'state', body).toPromise();
  }
  updateState(body) {
    return this.http.post(this.baseUrl + 'updatestate', body).toPromise();
  }
}
