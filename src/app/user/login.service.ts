import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: Observable<firebase.User>;

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((response: firebase.auth.UserCredential) => {
        if (response.user.emailVerified) {
          response.user.getIdToken().then(token => {
            localStorage['token'] = token;
            this.router.navigate(['']);
          });
        } else {
          this.logout();
          this.router.navigate(['login'])
        }
      })
        .catch((error) => {
          this.router.navigate(['login'])
        });
    })

      .catch((error) => {
        this.router.navigate(['login'])
      });
  }

  public logout() {
    return this.afAuth.auth.signOut();
  }
}
