import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { Register } from '../user/register-module/register-module.module';
import { HomeService } from '../home.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  user$: Observable<firebase.User>;
  registerCode: Register;
  codeInfo: FormGroup;
  code: string = '';
  key: string = '';
  data: any;

  constructor(private auth: AngularFireAuth, private authService: AuthService,
    private homeService: HomeService, private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.user$ = auth.authState
  }

  async ngOnInit() {
    this.user$.subscribe(user => {
      this.homeService.getByUid(user.uid).subscribe((data: any) => {
        this.data = data;
      })
    });
  }

}
