import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/user/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private authService: AuthService) { }

  logOn(mail, password) {
    this.loginService.login(mail, password);
  }

  ngOnInit() {
  }
}