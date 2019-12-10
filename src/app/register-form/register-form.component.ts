import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { UsersService } from 'services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup;
  canSee: boolean;
  constructor(
    private user: UsersService,
    private router: Router,
  ) {
    this.canSee = false;
    this.register = new FormGroup({
      email: new FormControl('',
        [Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      username: new FormControl('', [
        Validators.required,

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]
      ),
      repeatpassword: new FormControl('',
        /* [this.passwordValidator] */
      ),
    })
  }

  ngOnInit() {

  }
  /* 
    passwordValidator(form: FormGroup) {
      const passwordControl = form.controls['passwords'];
      const repeatpassword = form.controls['repeatpassword']
      if (passwordControl.value === repeatpassword.value) {
        return null;
      } else {
        return { passwordValidator: true };
      }
    } */


  async onSubmit() {
    console.log(this.register.value);
    const result = await this.user.registerUser(this.register.value);
    this.router.navigate(['/fields'])
  }
}
