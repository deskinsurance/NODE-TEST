import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule, Router, ActivatedRoute} from '@angular/router'
import { AuthGuardService } from '../auth.guard';
import {UserLogin} from '../model/login.model';
import {LoginService} from '../services/login.service';
import {IUserLogin} from '../model/login.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  constructor(private router : Router, private route: ActivatedRoute,private svc:LoginService,  private toastr: ToastrService) { }

  ngOnInit() {  
    this.svc.getUser().subscribe(data=>{
      this.UserList=data.recordset
    });
  }

  login() : void {
  if(this.UserList.find(c=>c.UserName==this.User.UserName && c.Password==this.User.Password)){
    this.router.navigate(['/home']);
    this.toastr.success("Login Suceded!","Home");    
   }
   else {
    this.toastr.error("Invalid credentials!","Login");   
   }
  }
}
