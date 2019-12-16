<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "services/user-profile.service";
=======
import { Component, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { UserProfileService } from 'services/user-profile.service';
>>>>>>> develop

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  arrUser: any;
  userKey: any;

  constructor(private userProfile: UserProfileService) { }

  async ngOnInit() {
<<<<<<< HEAD
    const id = (localStorage.getItem("id")) ? (localStorage.getItem("id")) : sessionStorage.getItem("id");
=======
    const id = (localStorage.getItem('id')) ? localStorage.getItem('id') : sessionStorage.getItem('id');
>>>>>>> develop
    this.userInfo = await this.userProfile.getAllUserData(id);
    console.log(this.userInfo);
  }
}
