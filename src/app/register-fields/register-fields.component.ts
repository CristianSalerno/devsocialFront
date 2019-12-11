import { Component, OnInit } from '@angular/core';
import { UsersService } from 'services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-fields',
  templateUrl: './register-fields.component.html',
  styleUrls: ['./register-fields.component.css']
})
export class RegisterFieldsComponent implements OnInit {

  createUser: FormGroup;
  constructor(private userService: UsersService, private router: Router) {
    this.createUser = new FormGroup({
      speciality: new FormControl(''),
      experience: new FormControl(''),
      availability: new FormControl(''),
    });


  }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.createUser.value);
    await this.userService.addUserFields(this.createUser.value);
    this.router.navigate(['/profile']);
  }

}
