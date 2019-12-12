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
  proyectosFiltrados: Temas[];
  constructor(private temasservice: TemasService) {

  }

  async ngOnInit() {
    this.arrProyectos = await this.temasservice.getAll();
    this.proyectosFiltrados = this.arrProyectos;



  }

  async filtrarProyectos(e) {
    this.arrProyectos = this.proyectosFiltrados.filter(proyecto => proyecto.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (e.target.value === "") {
      this.arrProyectos = await this.temasservice.getAll();
    }
    console.log(this.arrProyectos);
  }

}