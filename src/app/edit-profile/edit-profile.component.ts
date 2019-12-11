import { Component, OnInit } from '@angular/core';
import { UsersService } from 'services/users.service';
import { User } from 'models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  mainUser: User;
  updateUser: FormGroup;
  constructor(private usersService: UsersService) {

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
    console.log(token);
    this.updateUser.value.id = this.mainUser.id;
    console.log(this.updateUser.value);
    const result = await this.usersService.updateNames(token, this.updateUser.value);
    console.log(result);
  }
}
