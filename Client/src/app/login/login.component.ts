import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule, Router, ActivatedRoute} from '@angular/router'
import {UserLogin} from '../model/login.model';
import {LoginService} from '../services/login.service';
import {IUserLogin} from '../model/login.model';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../services/auth.service';
import {FlashMessageModule} from 'angular-flash-message';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  User:UserLogin=
{
  UserName:null,
  Password:null,
  UserType:null,
  IsActive:null
}
UserList:IUserLogin[];
  constructor(private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessageModule, 
    private route: ActivatedRoute,
    private svc:LoginService,  
    private toastr: ToastrService) { }

  ngOnInit() {  
    this.svc.getUser().subscribe(data=>{
      this.UserList=data[0]
    });
  }

  login() : void {
      this.authService.login(this.User)
      .subscribe(
        data => {
          localStorage.setItem('token', data.toString());
          this.router.navigate(['/home']);
          this.toastr.success("Login Suceded!","Home");    
        },
        error => {this.toastr.error("Invalid credentials!","Login");  }
      );

  }
}
