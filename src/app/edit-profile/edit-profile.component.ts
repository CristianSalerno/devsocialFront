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
  updateUser: FormGroup;
  updateUserInfo: FormGroup;
  updateAbout: FormGroup;
  updateSkills: FormGroup;

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
  }

  async updateInfo() {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.usersService.updateNames(token, this.updateUser.value);
    alert('Update Sucessfull');
  }

  async updateOtherInfo() {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.userProfileService.editUser(token, this.updateUserInfo.value);
  }
  async updateAboutInfo() {
    console.log(this.updateAbout.value)
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.userProfileService.updateAbout(token, this.updateAbout.value);
  }

  async updateSkill() {
    console.log(this.updateSkills.value)
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.userProfileService.updateSkills(token, this.updateSkills.value)
  }


}
