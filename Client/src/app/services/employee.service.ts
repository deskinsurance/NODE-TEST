import { IEmployee } from './../model/employee.model';
import {Injectable} from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {IEmployee} from '../model/employee.model';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService{

 constructor(private _http:HttpClient){}
 
getUser()
   {
      return this._http.get<IEmployee>("http://localhost:3000/api/employee");
   }

   
   
}