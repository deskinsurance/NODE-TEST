import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import {UserLogin} from '../model/login.model';
import {IUserLogin} from '../model/login.model';
import { HttpClient,HttpResponse, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: IUserLogin;
  
  constructor(private http:HttpClient) { }

  login(userlogin:IUserLogin){
  return this.http.post('http://localhost:3000/api/users/login', userlogin,{
    observe: 'body'
  });
  }

  getUserName(){
return this.http.get('http://localhost:3000/api/users/username',{
observe: 'body',
params:new HttpParams().append('token',localStorage.getItem('token'))
 });
}

}
