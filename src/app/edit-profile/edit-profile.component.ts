import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  mainUser: User;
  userInfo: any;
  updateUser: FormGroup;
  updateUserInfo: FormGroup;
  updateAbout: FormGroup;
  updateSkills: FormGroup;
  token: any;
  id: number;

  constructor(
    private usersService: UsersService,
    private userProfileService: UserProfileService,
  ) {
    this.updateUserInfo = new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      language: new FormControl(''),
      phone: new FormControl('')
    })
    this.updateAbout = new FormGroup({
      about: new FormControl(''),
    })
    this.updateSkills = new FormGroup({
      speciality: new FormControl(''),
      experience: new FormControl(''),
      availability: new FormControl(''),
    })
  }
  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
    this.updateUser = new FormGroup({
      username: new FormControl(this.mainUser.username),
      name: new FormControl(this.mainUser.name),
      surnames: new FormControl(this.mainUser.surnames)
    });
    //recupera el token del usuario logeado y lo almacena en token.
    this.token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    this.id = parseInt((localStorage.getItem('id')) ? localStorage.getItem('id') : sessionStorage.getItem('id'));

    this.getUserInfo();

  }

  async getUserInfo() {
    this.userInfo = await this.userProfileService.getAllUserData(this.id);
    console.log(this.userInfo)
  }

  async updateInfo() {
    await this.usersService.updateNames(this.token, this.updateUser.value);
    alert('Update Sucessfull');
  }

  async updateOtherInfo() {
    await this.userProfileService.editUser(this.token, this.updateUserInfo.value);
    alert('Update Sucessfull');
  }
  async updateAboutInfo() {
    await this.userProfileService.updateAbout(this.token, this.updateAbout.value);
    alert('Update Sucessfull');
  }

  async updateSkill() {
    await this.userProfileService.updateSkills(this.token, this.updateSkills.value);
    alert('Update Sucessfull');
  }
}
