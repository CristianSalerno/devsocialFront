import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TemasService } from 'services/temas.service';
import { SubscriptionService } from 'services/subscription.service';
import { UsertemaService } from 'services/usertema.service';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {
  proyectoArr: any[];
  paramsId: number;
  subscriptionActive: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private temasService: TemasService,
    private subscriptionService: SubscriptionService,
    private usertemaService: UsertemaService) {
    this.proyectoArr = [];
    this.subscriptionActive = [];
  }

  async ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      const results = await this.temasService.getById(params.pId);
      // tslint:disable-next-line: radix
      this.paramsId = parseInt(params.pId);
      this.proyectoArr.push(results);

      const body = {
        idTema: this.paramsId,
        state: 'pending'
      };
      this.subscriptionActive = await this.subscriptionService.getByTemaState(body);
      console.log(this.subscriptionActive);
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
    const res = await this.usertemaService.insert({ idTema: this.paramsId, idUser: data.id, role: 'collaborator' });
    console.log(res);
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
}
