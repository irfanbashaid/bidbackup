import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GrabitService } from '../service/grabit.service';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginGuard implements CanActivate {
  constructor(private grabit:GrabitService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let meta = this;
      return meta.grabit._privateKey==''||meta.grabit._privateKey==undefined;
  }
}
