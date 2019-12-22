import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { UsertemaService } from '../services/usertema.service';
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
    private router: Router,
  ) { }

  async ngOnInit() {
    const id = (localStorage.getItem('id')) ? localStorage.getItem('id') : sessionStorage.getItem('id');
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    this.userInfo = await this.userProfile.getAllUserData(id);
    this.userProjects = await this.userTemaService.getAllProjects(token);
    console.log(token);
  }

  async onSubmit(id) {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    const result = await this.userTemaService.checkUser(token, { idTema: id });
    // tslint:disable-next-line: no-string-literal
    if (result['role'] === 'creator') {
      this.router.navigate([`/projects/creator/${id}`]);
      // tslint:disable-next-line: no-string-literal
    } else if (result['role'] === 'collaborator') {
      this.router.navigate([`/projects/profile/${id}`]);
    }
  }
}
