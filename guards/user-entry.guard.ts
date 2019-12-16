import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from 'services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserEntryGuard implements CanActivate {
  constructor(
    private router: Router,
    private usersService: UsersService
  ) {

  }
  async canActivate() {
    const mainUser = await this.usersService.mainUserExist();
    if (mainUser) {
      return true;
    } else {
      alert('You cant enter here, first sign in ...');
      this.router.navigate(['/home']);
    }
  }
}
