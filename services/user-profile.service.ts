import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  /* Envia los campos a la tabla user_profile */
  addUserFields(pUserData) {
    return this.http
      .post("http://localhost:3000/api/userProfile", pUserData)
      .toPromise();
  }

  getAllUserData(pUserid) {
    console.log("userId PuserId", pUserid);
    return this.http
      .get(`http://localhost:3000/api/userProfile/allData/${pUserid}`)
      .toPromise();
  }
}
