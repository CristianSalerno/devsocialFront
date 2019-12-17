import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  constructor(private http: HttpClient) { }

  /* Envia los campos a la tabla user_profile */
  addUserFields(pUserData) {
    return this.http
      .post('http://localhost:3000/api/userProfile', pUserData)
      .toPromise();
  }

  getAllUserData(pUserid) {
    return this.http
      .get(`http://localhost:3000/api/userProfile/allData/${pUserid}`)
      .toPromise();
  }

  editUser(token, pUserData) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    }
    return this.http.post('http://localhost:3000/api/userProfile/dataExtra', pUserData, httpOptions).toPromise();
  }

  updateAbout(token, pAbout) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    }
    return this.http.post('http://localhost:3000/api/userProfile/about', pAbout, httpOptions).toPromise();
  }
}
