import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/users/login';
  }

  auth(pBody) {
    const body = {
      email: pBody.email,
      password: pBody.password
    };
    return this.http
      .post(this.baseUrl, body)
      .toPromise();
  }
}
