import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'services/user-profile.service';
import { UsertemaService } from 'services/usertema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  userProjects: any;



  constructor(
    private userProfile: UserProfileService,
    private userTemaService: UsertemaService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = (localStorage.getItem('id')) ? localStorage.getItem('id') : sessionStorage.getItem('id');
    const userToken = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    this.userInfo = await this.userProfile.getAllUserData(id);
    this.userProjects = await this.userTemaService.getAllProjects(userToken);
  }

  onSubmit(id) {
    this.router.navigate([`/projects/profile/${id}`])
  }
}
