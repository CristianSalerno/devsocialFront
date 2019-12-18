import { Component, OnInit } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';
import { Temas } from 'src/app/models/temas.model';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UsertemaService } from 'src/app/services/usertema.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  arrProyectos: Temas[];
  proyectosFiltrados: Temas[];
  proyectosSuscrito: Temas[];
  existeUsuario: boolean;
  token: string;
  constructor(
    private temasservice: TemasService,
    private subscriptionService: SubscriptionService,
    private usertemaService: UsertemaService,
    private router: Router) {
    this.existeUsuario = false;
    this.token = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
  }

  async ngOnInit() {
    this.arrProyectos = await this.temasservice.getAll();
    console.log(this.arrProyectos);
    this.proyectosSuscrito = await this.temasservice.getSuscritos(this.token);
    console.log(this.proyectosSuscrito);
    this.proyectosFiltrados = this.arrProyectos;
  }

  async filtrarProyectos(e) {
    this.arrProyectos = this.proyectosFiltrados.filter(proyecto =>
      proyecto.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === '') {
      this.arrProyectos = await this.temasservice.getAll();
    }
  }
  async onSubmit(idTema) {
    const token = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
    const result = await this.subscriptionService.insert(token, idTema);
    alert('Subscription sucessfull');
  }
  async checkUser(id) {
    const token = (localStorage.getItem('user_token') ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token'));
    const result = await this.usertemaService.checkUser(token, { idTema: id });
    // tslint:disable-next-line: no-string-literal
    console.log(result);
    if (result['role'] === 'collaborator') {
      this.router.navigate(['/projects/profile/' + id]);
      // tslint:disable-next-line: no-string-literal
    } else if (result['role'] === 'creator') {
      this.router.navigate(['/projects/creator/' + id]);
    }
  }

  isMyProject(pProjectId) {
    console.log(this.proyectosSuscrito);
    return this.proyectosSuscrito.includes(pProjectId);
  }
}
