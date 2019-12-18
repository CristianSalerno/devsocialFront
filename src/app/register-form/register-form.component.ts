import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator
} from '@angular/forms';

import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup;
  canSee: boolean;
  userId: any;
  constructor(
    private user: UsersService,
    private userProfile: UserProfileService,
    private router: Router
  ) {
    this.canSee = false;
    (this.register = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      repeatpassword: new FormControl('')
    })),
      // tslint:disable-next-line: no-unused-expression
      [this.passwordValidator];


  }

  ngOnInit() { }

  passwordValidator(forms: FormGroup) {
    // tslint:disable-next-line: no-string-literal
    const passwordControl = forms.controls['password'];
    // tslint:disable-next-line: no-string-literal
    const repeatpassword = forms.controls['repeatpassword'];
    if (passwordControl.value === repeatpassword.value) {
      return null;
    } else {
      return { passwordValidator: true };
    }
  }

  async onSubmit() {
    this.userId = await this.user.registerUser(this.register.value);
    sessionStorage.setItem('userId', this.userId);
    this.router.navigate(['/fields']);
  }
}
