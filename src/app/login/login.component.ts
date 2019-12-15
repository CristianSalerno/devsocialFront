import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "services/authentication.service";
import { Router } from "@angular/router";

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
    private router: Router
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

  ngOnInit() {}

  async onSubmit() {
    const result = await this.authService.auth(this.access.value);
    // tslint:disable-next-line: no-string-literal
    if (result["error"]) {
      this.errorLogin = true;
    } else {
      if (this.access.value.persistAccount === true) {
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem("user_token", result["succesfull"].toString());
      } else {
        // tslint:disable-next-line: no-string-literal
        sessionStorage.setItem("user_token", result["succesfull"].toString());
      }
      await this.router.navigate(["/projects"]);
      window.location.reload();
    }
  }

  showPass() {
    this.passView = this.passView === "password" ? "text" : "password";
    this.eyes =
      this.eyes === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash";
  }
}
