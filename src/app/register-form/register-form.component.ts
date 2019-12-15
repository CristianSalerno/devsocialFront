import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator
} from "@angular/forms";

import { Router } from "@angular/router";

import { UsersService } from "services/users.service";
import { UserProfileService } from "services/user-profile.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup;
  canSee: boolean;
  userId: any;
  constructor(
    private user: UsersService,
    private userProfile: UserProfileService,
    private router: Router
  ) {
    this.canSee = false;
    (this.register = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      repeatpassword: new FormControl("")
    })),
      [this.passwordValidator];
  }

  ngOnInit() {}

  passwordValidator(forms: FormGroup) {
    const passwordControl = forms.controls["password"];
    const repeatpassword = forms.controls["repeatpassword"];
    if (passwordControl.value === repeatpassword.value) {
      return null;
    } else {
      return { passwordValidator: true };
    }
  }

  async onSubmit() {
    this.userId = await this.user.registerUser(this.register.value);
    console.log("Este es mi User ID ", this.userId);
    sessionStorage.setItem("userId", this.userId);
    this.router.navigate(["/fields"]);
  }
}
