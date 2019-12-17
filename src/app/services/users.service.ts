import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[];

  constructor(private http: HttpClient) { }

  getAll(token) {
    return this.http
      .get<User[]>("http://localhost:3000/api/users/")
      .toPromise();
  }
  getById(pToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.get<User>('http://localhost:3000/api/users/', httpOptions).toPromise();
  }
  mainUserExist() {
    if (localStorage.getItem("user_token")) {
      return this.getMainUser(localStorage.getItem("user_token"));
    } else if (sessionStorage.getItem("user_token")) {
      return this.getMainUser(sessionStorage.getItem("user_token"));
    } else {
      return undefined;
    }
  }
  getMainUser(pToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .get<User>("http://localhost:3000/api/users/main", httpOptions)
      .toPromise();
  }
  updateNames(pToken: string, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post("http://localhost:3000/api/users/updatenames", pBody, httpOptions)
      .toPromise();
  }

  updateEmail(pToken: string, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post("http://localhost:3000/api/users/updatemail", pBody, httpOptions)
      .toPromise();
  }

  updatePassword(pToken: string, pBody: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post("http://localhost:3000/api/users/updatepass", pBody, httpOptions)
      .toPromise();
  }

  registerUser(pUser) {
    return this.http
      .post("http://localhost:3000/api/users/register", pUser)
      .toPromise();
  }
}
