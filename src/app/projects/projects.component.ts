import { Component, OnInit } from '@angular/core';
import { TemasService } from 'services/temas.service';
import { Temas } from 'models/temas.model';
import { SubscriptionService } from 'services/subscription.service';
import { UsertemaService } from 'services/usertema.service';
import { Router } from '@angular/router';


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
    private subscriptionService: SubscriptionService,
    private usertemaService: UsertemaService,
    private router: Router) {

  }

  async ngOnInit() {
    this.arrProyectos = await this.temasservice.getAll();
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
    if (result['role'] === 'collaborator') {
      this.router.navigate(['/projects/profile/' + id]);
      // tslint:disable-next-line: no-string-literal
    } else if (result['role'] === 'creator') {
      this.router.navigate(['/projects/creator/' + id]);
    }
  }
}
