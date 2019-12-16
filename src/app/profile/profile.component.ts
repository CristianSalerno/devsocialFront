import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "services/user-profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  arrUser: any;
  userKey: any;

  constructor(private userProfile: UserProfileService) { }

  async ngOnInit() {
    const id = (localStorage.getItem("id")) ? (localStorage.getItem("id")) : sessionStorage.getItem("id");
    this.userInfo = await this.userProfile.getAllUserData(id);
    console.log(this.userInfo);
  }
}
