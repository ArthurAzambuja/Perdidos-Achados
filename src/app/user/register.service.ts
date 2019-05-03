import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Register } from './register-module/register-module.module';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private db: AngularFireDatabase) { }

  insert(register: Register){
    this.db.list('user').push(register)
      .then((result: any) =>{
        console.log(result.key);
      });
  }
}
