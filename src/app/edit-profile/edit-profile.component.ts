import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UsersService } from 'services/users.service';
import { User } from 'models/user.model';
import { FormGroup, FormControl, FormControlDirective } from '@angular/forms';
=======
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> develop

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

  constructor(private usersService: UsersService) {

  }
  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
    this.updateUser = new FormGroup({
      username: new FormControl(this.mainUser.username),
      name: new FormControl(this.mainUser.name),
      surnames: new FormControl(this.mainUser.surnames)
    });
    this.updateUserInfo = new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      language: new FormControl(''),
      phone: new FormControl('')
    })
    this.updateAbout = new FormGroup({
      about: new FormControl(''),
    })
  }

  async updateInfo() {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.usersService.updateNames(token, this.updateUser.value);
    alert('Update Sucessfull');
  }

  updateOtherInfo() {
    console.log(this.updateUserInfo.value)
  }
  updateAboutInfo() {
    console.log(this.updateAbout.value)
  }
}
