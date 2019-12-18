import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(private http: HttpClient) { }

  leaveComent(pComent, pUser) {
    return this.http
      .post("http://localhost:3000/api/coment", pComent, pUser)
      .toPromise();
  }

  getComents(pId) {
    return this.http.get("http://localhost:3000/api/coment/" + pId).toPromise();
  }
}
