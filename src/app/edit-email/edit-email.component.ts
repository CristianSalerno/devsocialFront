import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent implements OnInit {
  updateInfo: FormGroup;
  constructor(
    private usersService: UsersService,
    private router: Router) {
    this.updateInfo = new FormGroup({
      email: new FormControl(''),
      repeatEmail: new FormControl('')
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    await this.usersService.updateEmail(token, this.updateInfo.value);
    this.router.navigate(['/profile/edit']);
    alert('Update Sucessfull');
  }
}
