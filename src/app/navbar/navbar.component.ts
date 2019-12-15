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
  username: any;
  mainUser: User;
  counter = 0;
  constructor(
    private router: Router) {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    if (token) {
      this.username = (localStorage.getItem('username')) ? localStorage.getItem('username') : sessionStorage.getItem('username');
      console.log(this.username);
    }
  }

  ngOnInit() {

  }

  async logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    await this.router.navigate(['/home']);
  }
}
