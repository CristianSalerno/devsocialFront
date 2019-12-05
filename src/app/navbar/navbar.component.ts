import { Component, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainUser: any;
  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
  }
}
