import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GrabitService } from '../service/grabit.service';

@Injectable({
  providedIn: 'root'
})
export class MydealsGuard implements CanActivate {
  constructor(private grabit:GrabitService,private route:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let meta = this;
      return new Promise((resolve,reject)=>{
        if(meta.grabit._privateKey!='' && meta.grabit._privateKey!=undefined){
          resolve(true);
        }
        else{
          meta.route.navigate(['home']);
          resolve(false);
        }
      });
  }
}
