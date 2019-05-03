import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor ( private auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }
  
  async ngOnInit(){
  }
  
  public logout() {
    return this.auth.auth.signOut();
  }
}