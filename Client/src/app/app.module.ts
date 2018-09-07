import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routing.module";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {LoginService} from './services/login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,     
     AppRoutingModule,     
     FormsModule,     
     HttpClientModule,    
     
  ],
  providers: [AuthGuardService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
