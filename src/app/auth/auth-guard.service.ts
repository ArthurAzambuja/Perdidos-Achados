import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log("VERIFY");
    console.log(localStorage['token']);

    if (!localStorage['token']) {
      this.router.navigate(['login']);
    }

    if (localStorage['token'] != 'null') {
      return true;
    } else {
      this.router.navigate(['login']);
    }

  }
}
