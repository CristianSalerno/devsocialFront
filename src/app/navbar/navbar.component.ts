import { Component, OnInit, OnChanges } from "@angular/core";
import { User } from "models/user.model";
import { UsersService } from "services/users.service";
import { Router, RouterModule } from "@angular/router";
import { UserProfileService } from "services/user-profile.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  mainUser: any;
  userInfo: any;
  constructor(private router: Router, private userProfile: UserProfileService) {
    const token = localStorage.getItem("user_token")
      ? localStorage.getItem("user_token")
      : sessionStorage.getItem("user_token");
    if (token) {
      this.mainUser = {
        username: localStorage.getItem("username")
          ? localStorage.getItem("username")
          : sessionStorage.getItem("username"),
        imageUrl: localStorage.getItem("image_url")
          ? localStorage.getItem("image_url")
          : sessionStorage.getItem("image_url").toString()
      };
    }
  }

  ngOnInit() {}

  async logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    await this.router.navigate(["/home"]);
  }

  async goProfile() {
    const sesionActive = sessionStorage.getItem("id");
    this.userInfo = await this.userProfile.getAllUserData(sesionActive);
    console.log(this.userInfo);
  }
}
