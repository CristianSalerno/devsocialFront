import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsertemaService {

  constructor(private http: HttpClient) {

  }

  insert(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post('http://localhost:3000/api/usertema/insert', pBody, httpOptions).toPromise();
  }

  checkUser(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post('http://localhost:3000/api/usertema/checkuser', pBody, httpOptions).toPromise();
  }
}
