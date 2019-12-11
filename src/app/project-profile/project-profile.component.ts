import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Temas } from 'models/temas.model';
import { TemasService } from 'services/temas.service';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {
  proyectoArr: any[];
  constructor(private activatedRoute: ActivatedRoute, private temasService: TemasService) {
    this.proyectoArr = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {

      const results = await this.temasService.getById(params.pId);
      this.proyectoArr.push(results);
      console.log(this.proyectoArr);
    });

  }

}
