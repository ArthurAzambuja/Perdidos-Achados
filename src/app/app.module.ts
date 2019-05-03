import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ValidateComponent } from './user/validate/validate.component';
import { environment } from '../environments/environment';
import { RegisterService } from './user/register.service';
import { LoginService } from './user/login.service';
import { UserService } from './user/user.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDTwq8YDJQzh1kzm11wJ-7Nbn8XkWrO4_g",
  authDomain: "achados-e-perdidos-ce5d5.firebaseapp.com",
  databaseURL: "https://achados-e-perdidos-ce5d5.firebaseio.com",
  projectId: "achados-e-perdidos-ce5d5",
  storageBucket: "achados-e-perdidos-ce5d5.appspot.com",
  messagingSenderId: "40469368702"
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({}),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    BsDropdownModule,
    TooltipModule
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    AngularFireModule,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
