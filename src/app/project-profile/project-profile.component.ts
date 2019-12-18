import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TemasService } from 'src/app/services/temas.service';
import { UsertemaService } from 'src/app/services/usertema.service';
import { Temas } from 'src/app/models/temas.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {
  project: Temas;
  paramsId: number;
  subscriptionActive: any;
  usersTeam: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private temasService: TemasService,
    private usertemaService: UsertemaService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const result = await this.temasService.getById(params.pId);
      // tslint:disable-next-line: radix
      this.paramsId = parseInt(params.pId);
      this.project = result;
      this.project.especializacion = this.project.especializacion.split(',').filter(item => item !== '');

      const token = localStorage.getItem("user_token") ? localStorage.getItem("user_token") : sessionStorage.getItem("user_token");
      this.usersTeam = await this.usertemaService.getUsersByTema(token, { temaId: this.paramsId });
    });
  }
  onSubmit(id) {
    this.router.navigate([`profile/${id}`]);
  }
}
