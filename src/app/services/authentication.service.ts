import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  auth(pBody) {
    const body = {
      email: pBody.email,
      password: pBody.password
    };
    return this.http
      .post('http://localhost:3000/api/users/login', body)
      .toPromise();
  }
}
