import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "services/authentication.service";
import { Router } from "@angular/router";
import { UserProfileService } from "services/user-profile.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  eyes: string;
  passView: string;
  access: FormGroup;
  errorLogin: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userProfile: UserProfileService
  ) {
    this.access = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      persistAccount: new FormControl("")
    });
    this.passView = "password";
    this.eyes = "fas fa-eye";
    this.errorLogin = false;
  }

  async ngOnInit() { }

  async onSubmit() {
    const result = await this.authService.auth(this.access.value);
    // tslint:disable-next-line: no-string-literal
    if (result["error"]) {
      this.errorLogin = true;
    } else {
      if (this.access.value.persistAccount === true) {
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem("user_token", result["succesfull"]);
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem("username", result["username"]);
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem("id", result["id"]);
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem("image_url", result["imageUrl"]);
      } else {
        // tslint:disable-next-line: no-string-literal
        sessionStorage.setItem("user_token", result["succesfull"]);
        // tslint:disable-next-line: no-string-literal
        sessionStorage.setItem("username", result["username"]);
        // tslint:disable-next-line: no-string-literal
        sessionStorage.setItem("id", result["id"]);
        // tslint:disable-next-line: no-string-literal
        sessionStorage.setItem("image_url", result["imageUrl"]);
      }
      await this.router.navigate(["/home"]);

      window.location.reload();
    }
  }

  showPass() {
    this.passView = this.passView === "password" ? "text" : "password";
    this.eyes =
      this.eyes === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash";
  }
}
