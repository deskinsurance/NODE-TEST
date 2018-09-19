import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserLogin} from './model/login.model';



@Injectable({
  providedIn: 'root',
  })
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (localStorage.getItem('Username')!=null && localStorage.getItem('Password')!=null) {
      this.router.navigate(['/home'])
      return true;
  }
  else
  {
    this.router.navigate(['/login'], {
      queryParams: {
        return: state.url
      }
    });
    return false;
  }
  
    /*console.log("this.UserLogin.UserName",this.UserLogin.UserName);
    if (this.UserLogin.UserName =="admin" && this.UserLogin.Password =="admin") {      
      return true;
    } else {      
      this.router.navigate(['/login/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }*/
  }
}
