import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TemasService } from 'src/app/services/temas.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UsertemaService } from 'src/app/services/usertema.service';
import { Temas } from '../models/temas.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {
  project: Temas;
  paramsId: number;
  subscriptionActive: any;
  usersTeam: any;
  activeTitle: boolean;
  activeDescription: boolean;
  dataTema: FormGroup;
  mainId: number;
  token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private temasService: TemasService,
    private subscriptionService: SubscriptionService,
    private usertemaService: UsertemaService,
    private router: Router
  ) {
    this.activeTitle = false;
    this.activeDescription = false;
    // tslint:disable-next-line: radix
    this.mainId = parseInt(localStorage.getItem('id') ? localStorage.getItem('id') : sessionStorage.getItem('id'));
    this.token = localStorage.getItem('user_token') ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const result = await this.temasService.getById(params.pId);
      this.project = result;
      this.project.especializacion = this.project.especializacion.split(',').filter(item => item !== '');
      // tslint:disable-next-line: radix
      this.paramsId = parseInt(params.pId);
      const body = {
        idTema: this.paramsId,
        state: 'pending'
      };
      this.subscriptionActive = await this.subscriptionService.getByTemaState(body);
      this.usersTeam = await this.usertemaService.getUsersByTema(this.token, { temaId: this.paramsId });
      console.log(this.usersTeam);
      /* Formulario */
      this.dataTema = new FormGroup({
        name: new FormControl(this.project.name),
        descripcion: new FormControl(this.project.descripcion)
      });
    });
  }

  activate(value) {
    switch (value) {
      case 'title': this.activeTitle = !this.activeTitle;
        break;
      case 'description': this.activeDescription = !this.activeDescription;
        break;
    }
  }

  /* Formularios */

  updateData() {
    this.activatedRoute.params.subscribe(async params => {
      // tslint:disable-next-line: radix
      this.dataTema.value.id = parseInt(params.pId);
      console.log(this.dataTema.value);
      await this.temasService.updateById(this.dataTema.value);
    });
  }

  /* Subscription */
  async onSubmitAccept(data) {
    const body = {
      stateEdit: 'accept',
      idTema: this.paramsId,
      state: 'pending',
      idSubscription: data.idSub
    };
    const result = await this.subscriptionService.updateState(body);
    this.subscriptionActive = result;
    const res = await this.usertemaService.insert(this.token, {
      idTema: this.paramsId,
      idUser: data.id,
      role: 'collaborator'
    });

    this.activatedRoute.params.subscribe(async params => {
      // tslint:disable-next-line: radix
      this.paramsId = parseInt(params.pId);
      this.usersTeam = await this.usertemaService.getUsersByTema(this.token, { temaId: this.paramsId });
    });
  }
  async onSubmitReject(data) {
    const body = {
      stateEdit: 'reject',
      idTema: this.paramsId,
      state: 'pending',
      idSubscription: data.idSub
    };
    const result = await this.subscriptionService.updateState(body);
    this.subscriptionActive = result;
  }

  async deleteTbi(dataId) {
    this.usersTeam = await this.usertemaService.deleteById(this.token, dataId);
  }

  onSubmit(id) {
    this.router.navigate([`profile/${id}`]);
  }
}
