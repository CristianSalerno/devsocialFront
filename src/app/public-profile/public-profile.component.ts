import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'services/user-profile.service';
import { UsertemaService } from 'services/usertema.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  userInfo: any;
  userProjects: any;

  constructor(
    private userTemaService: UsertemaService,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
  ) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params.idUser)
      this.userInfo = await this.userProfileService.getAllUserData(params.idUser);
      console.log(this.userInfo);
    })
    const userToken = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    this.userProjects = await this.userTemaService.getAllProjects(userToken);
  }
}
