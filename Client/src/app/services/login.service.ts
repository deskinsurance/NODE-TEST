import {Injectable} from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IUserLogin} from '../model/login.model';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService{

    constructor(private _http:HttpClient){}
   getUser(){
      return this._http.get<IUserLogin>("http://localhost:3000/api/users");
    }
  
}