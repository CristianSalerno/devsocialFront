import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup;
  constructor() {
    this.register = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      repeatpassword: new FormControl(''),
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.register.value);
  }
}
