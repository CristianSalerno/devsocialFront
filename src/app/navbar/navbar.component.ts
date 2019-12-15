import { Component, OnInit, OnChanges } from "@angular/core";
import { User } from "models/user.model";
import { UsersService } from "services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  mainUser: any;
  constructor(private router: Router) {
    console.log(localStorage.getItem("user_token"));
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
}
