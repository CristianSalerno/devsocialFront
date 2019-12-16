import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { UsersService } from "services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-password",
  templateUrl: "./edit-password.component.html",
  styleUrls: ["./edit-password.component.css"]
})
export class EditPasswordComponent implements OnInit {
  updateInfo: FormGroup;
  constructor(private usersService: UsersService, private router: Router) {
    this.updateInfo = new FormGroup({
      oldPassword: new FormControl(""),
      password: new FormControl(""),
      repeatPassword: new FormControl("")
    });
  }

  ngOnInit() {}
  async onSubmit() {
    const token = localStorage.getItem("user_token")
      ? localStorage.getItem("user_token")
      : sessionStorage.getItem("user_token");
    await this.usersService.updatePassword(token, this.updateInfo.value);
    this.router.navigate(["/profile/edit"]);
    alert("Update Sucessfull");
  }
}
