import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginService } from 'src/app/user/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;


  constructor(public afAuth: AngularFireAuth, public router: Router, private fb: FormBuilder,
    private registerService: RegisterService, private db: AngularFireDatabase,
    private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      uid: [''],
      code: [''],
      phone: ['', Validators.required]
    });
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['validate'])
  }

  async onSubmit(form: FormGroup) {
    if (form.invalid) return;

    let value = this.registerForm.value;

    await this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password);
    await this.afAuth.auth.currentUser.updateProfile({
      displayName: value.name
    });
    this.sendEmailVerification();

    this.db.list('user').push({
      uid: this.afAuth.auth.currentUser.uid,
      code: Math.floor((Math.random()*1000000)+1),
      phone: value.phone,
      email: value.email
    });

    this.loginService.logout();
  }
}