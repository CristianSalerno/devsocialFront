import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[];
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/users/';
  }

  getAll(token) {
    return this.http
      .get<User[]>(this.baseUrl)
      .toPromise();
  }
  getById(pToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http.get<User>(this.baseUrl, httpOptions).toPromise();
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
      .get<User>(this.baseUrl + "main", httpOptions)
      .toPromise();
  }
  updateNames(pToken: string, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post(this.baseUrl + "updatenames", pBody, httpOptions)
      .toPromise();
  }

  updateEmail(pToken: string, pBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post(this.baseUrl + "updatemail", pBody, httpOptions)
      .toPromise();
  }

  updatePassword(pToken: string, pBody: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: pToken
      })
    };
    return this.http
      .post(this.baseUrl + "updatepass", pBody, httpOptions)
      .toPromise();
  }

  registerUser(pUser) {
    return this.http
      .post(this.baseUrl + "register", pUser)
      .toPromise();
  }
}
