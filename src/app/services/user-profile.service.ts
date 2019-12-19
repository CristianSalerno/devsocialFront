import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devsocial-back.herokuapp.com/api/userProfile/';
  }

  /* Envia los campos a la tabla user_profile */
  addUserFields(pUserData) {
    return this.http
      .post(this.baseUrl, pUserData)
      .toPromise();
  }

  getAllUserData(pUserid) {
    return this.http
      .get(this.baseUrl + pUserid)
      .toPromise();
  }

  editUser(token, pUserData) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    };
    return this.http.post(this.baseUrl + 'dataExtra', pUserData, httpOptions).toPromise();
  }

  updateAbout(token, pAbout) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    };
    return this.http.post(this.baseUrl + 'about', pAbout, httpOptions).toPromise();
  }

  updateSkills(token, pSkills) {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: token,
      })
    };
    return this.http.post(this.baseUrl + 'skills', pSkills, httpOptions).toPromise();
  }


}
