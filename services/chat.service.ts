import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(private http: HttpClient) {}

  leaveComent(pComent) {
    return this.http
      .post("http://localhost:3000/api/coment", pComent)
      .toPromise();
  }

  getComents() {
    return this.http.get("http://localhost:3000/api/coment").toPromise();
  }
}
