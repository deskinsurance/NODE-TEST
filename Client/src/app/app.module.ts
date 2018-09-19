import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routing.module";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {LoginService} from './services/login.service';
import { HomeComponent } from './home/home.component';
import {HomeService} from './services/home.service';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';
import {FlashMessageModule} from 'angular-flash-message';
import { HttpModule } from '@angular/http';
import {DataTableModule} from 'primeng/datatable';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';


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
     ToastrModule.forRoot(),
     CommonModule,
     FlashMessageModule,
     DataTableModule,
     ButtonModule,
     DropdownModule,
     MultiSelectModule,
     ReactiveFormsModule  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
