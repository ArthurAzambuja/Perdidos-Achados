import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { userForm } from './user-module/user-module.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subscription: Subscription;
  user$: Observable<firebase.User>;
  data: any;
  

  constructor( private db: AngularFireDatabase) { }


  getByCode(code: number) {
    return this.db.list('user', ref => ref.orderByChild('code').equalTo(code))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c=> ({ key: c.payload.key, ...c.payload.val()}))[0]
        })
      );
  }

  getInfos(code: any) {
    return this.db.list('user', ref => ref.orderByValue().equalTo(code))
  }
  
  getById(code: any) {
    return this.db.list('user/' + code);
  }

}
