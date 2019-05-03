import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelperService: JwtHelperService) { }

  get authenticated() {
    let token = localStorage['token'];
    if (token) {
      return !this.jwtHelperService.isTokenExpired(token);
    } else {
      return false;
    }
  }
}