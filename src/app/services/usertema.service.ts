import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temas } from '../models/temas.model';
import { User } from '../models/user.model';

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

  getAllProjects(pToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.get(`http://localhost:3000/api/userTema/allData`, httpOptions).toPromise();
  }

  getUsersByTema(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post<User[]>(`http://localhost:3000/api/usertema/checkusersbytema`, pBody, httpOptions).toPromise();
  }
  deleteById(pToken, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.post('http://localhost:3000/api/usertema/delete', pBody, httpOptions).toPromise();
  }
}
