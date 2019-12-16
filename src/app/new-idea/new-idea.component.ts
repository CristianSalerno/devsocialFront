import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TemasService } from 'services/temas.service';
import { UsertemaService } from 'services/usertema.service';
import { UsersService } from 'services/users.service';
import { User } from 'models/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {
  form: FormGroup;
  mainUser: User;

  constructor(
    private temasService: TemasService,
    private router: Router,
    private usertemaService: UsertemaService,
    private usersService: UsersService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      perfil1: new FormControl('', [Validators.required]),
      perfil2: new FormControl(''),
      perfil3: new FormControl(''),
      perfil4: new FormControl(''),
      perfil5: new FormControl(''),
      imgUrl: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit() {
    this.mainUser = await this.usersService.mainUserExist();
  }



  async onSubmit() {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    const formularioValue = await this.temasService.create(this.form.value);
    console.log(formularioValue);
    const body = {
      // tslint:disable-next-line: no-string-literal
      idTema: formularioValue['insertId'],
      idUser: this.mainUser.id,
      role: 'creator'
    };
    const result = await this.usertemaService.insert(token, body);
    console.log(result);
    await this.router.navigate(['/projects']);
  }
}
