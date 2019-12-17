import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TemasService } from 'services/temas.service';
import { UsertemaService } from 'services/usertema.service';
import { UsersService } from 'services/users.service';
import { User } from 'models/user.model';
import { Router } from '@angular/router';
import { HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {
  form: FormGroup;
  mainUser: User;
  files;

  constructor(
    private temasService: TemasService,
    private router: Router,
    private usertemaService: UsertemaService,
    private usersService: UsersService,
    private http: HttpClient

  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      perfil1: new FormControl('', [Validators.required]),
      perfil2: new FormControl(''),
      perfil3: new FormControl(''),
      imgUrl: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
  }

  async onSubmit() {
    const token = localStorage.getItem('user_token') ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');

    const fd = new FormData();
    fd.append('imagen', this.files[0], 'nuevaImagen.png');
    fd.append('name', this.form.controls.name.value);
    fd.append('descripcion', this.form.controls.descripcion.value);
    fd.append('perfil1', this.form.controls.perfil1.value);
    fd.append('perfil2', this.form.controls.perfil2.value);
    fd.append('perfil3', this.form.controls.perfil3.value);

    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    const req = new HttpRequest('POST', 'http://localhost:3000/api/temas/create', fd, {
      headers: header
    });

    const httpResult = await this.http.request(req).toPromise();
    const body = {
      // tslint:disable-next-line: no-string-literal
      idTema: httpResult['body'].insertId,
      idUser: this.mainUser.id,
      role: 'creator'
    };
    const res = await this.usertemaService.insert(token, body);
    console.log(res);
    this.router.navigate(['/projects']);
  }


  onFileChange($event) {
    this.files = $event.target.files;
  }
}
