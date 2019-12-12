import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsertemaService {

  constructor(private http: HttpClient) {

  }

  insert(pBody) {
    return this.http.post('http://localhost:3000/api/usertema/insert', pBody).toPromise();
  }
}
