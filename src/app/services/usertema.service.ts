import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temas } from '../models/temas.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsertemaService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/usertema/';
  }

  insert(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post(this.baseUrl + 'insert', pBody, httpOptions).toPromise();
  }

  checkUser(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post(this.baseUrl + 'checkuser', pBody, httpOptions).toPromise();
  }

  getAllProjects(pToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.get(this.baseUrl + 'allData', httpOptions).toPromise();
  }

  getUsersByTema(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post<User[]>(this.baseUrl + 'checkusersbytema', pBody, httpOptions).toPromise();
  }
  deleteById(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post(this.baseUrl + 'delete', pBody, httpOptions).toPromise();
  }
}
