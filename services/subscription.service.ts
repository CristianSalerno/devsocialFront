import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) {
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
    return this.http.post('http://localhost:3000/api/subscription/insert', body, httpOptions).toPromise();
  }
  getByTemaState(body) {
    return this.http.post('http://localhost:3000/api/subscription/state', body).toPromise();
  }
  updateState(body) {
    return this.http.post('http://localhost:3000/api/subscription/updatestate', body).toPromise();
  }
}
