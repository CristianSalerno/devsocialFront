import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainUser: any;
  userInfo: any;
  constructor(
    private router: Router,
    private userProfile: UserProfileService,
    private ngRedux: NgRedux<IAppState>) {

    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.mainUser = {
        username: store.dataUser.username,
        imageUrl: store.dataUser.imageUrl
      };
    });

    const token = localStorage.getItem('user_token') ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    if (token) {
      this.mainUser = {
        username: localStorage.getItem('username') ? localStorage.getItem('username') : sessionStorage.getItem('username'),
        imageUrl: localStorage.getItem('image_url') ? localStorage.getItem('image_url') : sessionStorage.getItem('image_url')
      };
    }
  }

  ngOnInit() { }

  async logout() {
    localStorage.clear();
    sessionStorage.clear();
    await this.router.navigate(['/home']);
  }

  async goProfile() {
    const sesionActive = (sessionStorage.getItem('id')) ? sessionStorage.getItem('id') : localStorage.getItem('id');
    this.userInfo = await this.userProfile.getAllUserData(sesionActive);
  }
}
