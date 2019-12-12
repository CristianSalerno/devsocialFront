import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'models/user.model';
import { UsersService } from 'services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainUser: User;
  counter = 0;
  constructor(
    private usersService: UsersService,
    private router: Router) {
  }

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
  }

  async logout() {
    localStorage.removeItem('user_token');
    sessionStorage.removeItem('user_token');
    await this.router.navigate(['/home']);
    window.location.reload();
  }
}
