import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemasService } from 'services/temas.service';
import { Temas } from 'models/temas.model';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  arrProyectos: Temas[];
  constructor(private temasservice: TemasService) {
    this.arrProyectos = [];
  }

  async ngOnInit() {
    this.arrProyectos = await this.temasservice.getAll();
    console.log(this.arrProyectos);


  }

}
