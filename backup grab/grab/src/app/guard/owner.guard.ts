import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GrabitService } from '../service/grabit.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private grabit:GrabitService,private route:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let meta = this;
      return new Promise((resolve,reject)=>{
        meta.grabit.owner().then(owner => {
          if(meta.grabit._etherumAccountAddress==owner){
            resolve(true);
          }
          else{
            meta.route.navigate(['home']);
            resolve(false);
          }
        })
      })
  }
}
