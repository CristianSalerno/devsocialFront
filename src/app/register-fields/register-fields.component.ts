import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserProfileService } from "services/user-profile.service";

@Component({
  selector: "app-register-fields",
  templateUrl: "./register-fields.component.html",
  styleUrls: ["./register-fields.component.css"]
})
export class RegisterFieldsComponent implements OnInit {
  createUser: FormGroup;
  constructor(private userProfile: UserProfileService, private router: Router) {
    this.createUser = new FormGroup({
      speciality: new FormControl(""),
      experience: new FormControl(""),
      availability: new FormControl("")
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const userId = sessionStorage.getItem("userId");
    const newUser = { ...this.createUser.value, fk_user: userId };
    const result = await this.userProfile.addUserFields(newUser);

    const userData = await this.userProfile.getAllUserData(newUser.userId);
    this.router.navigate(["/profile"]);
  }
}
