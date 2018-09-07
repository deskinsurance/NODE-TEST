import {Injectable} from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IEmployeeDetails} from '../model/home.model';
import 'rxjs/add/operator/map';


@Injectable()

export class HomeService{

    constructor(private _http:HttpClient){}

   getEmployeeDetails(){
      return this._http.get<IEmployeeDetails>("http://localhost:3000/api/employee");
    }
  
   
}