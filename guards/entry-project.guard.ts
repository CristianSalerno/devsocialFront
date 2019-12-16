import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsertemaService } from 'services/usertema.service';

@Injectable({
  providedIn: 'root'
})
export class EntryProjectGuard implements CanActivate {
  constructor(
    private router: Router,
    private usertemaService: UsertemaService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot
  ) {
    const token = (localStorage.getItem('user_token')) ? localStorage.getItem('user_token') : sessionStorage.getItem('user_token');
    const result = await this.usertemaService.checkUser(token, { idTema: route.params.pId });
    // tslint:disable-next-line: no-string-literal
    if (result['role'] === 'collaborator') {
      console.log('creator');
      return true;
    } else {
      alert('Yo cant enter to this project');
      this.router.navigate(['/projects']);
    }
  }
}
