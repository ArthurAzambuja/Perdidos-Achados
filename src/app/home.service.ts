import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private db: AngularFireDatabase) { }


  
  getByUid(uid: string) {
    return this.db.list('user', ref => ref.orderByChild('uid').equalTo(uid))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))[0]
        })
      );
  }
}
