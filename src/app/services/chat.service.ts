import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/coment/';
  }

  leaveComent(pComent, pUser) {
    return this.http
      .post(this.baseUrl, pComent, pUser)
      .toPromise();
  }

  getComents(pId) {
    return this.http.get(this.baseUrl + pId).toPromise();
  }
}
