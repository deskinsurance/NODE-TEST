import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routing.module";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {LoginService} from './services/login.service';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import {HomeService} from './services/home.service';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
//import 'ag-grid-enterprise';
//import 'ag-grid-enterprise/main';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,     
     AppRoutingModule,     
     FormsModule,     
     HttpClientModule,    
     AgGridModule.withComponents([HomeComponent]),
     ToastrModule.forRoot(),
     CommonModule,
  ],
  providers: [AuthGuardService,LoginService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
