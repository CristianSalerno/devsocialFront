import { Component, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mainUser: User;
  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
  }

}
