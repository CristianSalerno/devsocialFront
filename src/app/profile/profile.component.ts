import { Component, OnInit } from "@angular/core";
import { User } from "models/user.model";
import { UsersService } from "services/users.service";
import { UserProfileService } from "services/user-profile.service";
import { AuthenticationService } from "services/authentication.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  mainUser: User;
  userInfo: any;
  usuarioActivo: any;
  userKey: any;

  constructor(
    private usersService: UsersService,
    private userProfile: UserProfileService,
    private authServ: AuthenticationService
  ) {}

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
    console.log("Id de La sesion", sessionStorage.getItem("userId"));
    const userInfo = await this.userProfile.getAllUserData(
      sessionStorage.getItem("userId")
    );
    console.log(userInfo);
  }
}
