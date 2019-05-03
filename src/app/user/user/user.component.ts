import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchForm: FormGroup
  user$: Observable<firebase.User>;
  data: any;


  constructor(private auth: AngularFireAuth, private authService: AuthService,
    private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService,
    private db: AngularFireDatabase) {
    this.user$ = auth.authState
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      code: ['']
    })
  }

  get code(): number {
    return Number(this.searchForm.get('code').value);
  }

  onSubmit() {
    this.user$.subscribe(user => {
      this.userService.getByCode(this.code).subscribe((data: any) => {
        this.data = data;
      })
    });
  }
}