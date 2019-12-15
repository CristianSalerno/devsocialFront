import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemasService } from 'services/temas.service';
import { Temas } from 'models/temas.model';
import { SubscriptionService } from 'services/subscription.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  arrProyectos: Temas[];
  proyectosFiltrados: Temas[];
  constructor(
    private temasservice: TemasService,
    private subscriptionService: SubscriptionService) {

  }

  async ngOnInit() {
    this.arrProyectos = await this.temasservice.getAll();
    this.proyectosFiltrados = this.arrProyectos;
  }

  async filtrarProyectos(e) {
    this.arrProyectos = this.proyectosFiltrados.filter(proyecto => proyecto.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (e.target.value === '') {
      this.arrProyectos = await this.temasservice.getAll();
    }
    console.log(this.arrProyectos);
  }
  async onSubmit(idTema) {
    const token = (localStorage.getItem('user_token') ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token'));
    const result = await this.subscriptionService.insert(token, idTema);
    console.log(result);
    alert('Subscription sucessfull');
  }
}
