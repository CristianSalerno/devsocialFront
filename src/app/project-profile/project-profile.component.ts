import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TemasService } from 'services/temas.service';
import { SubscriptionService } from 'services/subscription.service';
import { UsertemaService } from 'services/usertema.service';
import { Temas } from 'models/temas.model';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {
  project: Temas;
  paramsId: number;
  subscriptionActive: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private temasService: TemasService,
  ) {
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const result = await this.temasService.getById(params.pId);
      // tslint:disable-next-line: radix
      this.paramsId = parseInt(params.pId);
      this.project = result;
      this.project.especializacion = this.project.especializacion.split(',').filter(item => item !== '');
    });
  }
}
