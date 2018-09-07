import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth.guard';
import {EmployeeDetails} from '../model/home.model';
import {HomeService} from '../services/home.service';
import {IEmployeeDetails} from '../model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  EmployeeDetails:IEmployeeDetails[];
  constructor(private svc:HomeService) { }
  columnDefs = [
		{headerName: 'FirstName', field: 'FirstName' },
		{headerName: 'MiddleName', field: 'MiddleName' },
		{headerName: 'LastName', field: 'LastName'},
		{headerName: 'EmployeeID', field: 'EmployeeID' },
		{headerName: 'Department', field: 'Department' },
		{headerName: 'SkillName', field: 'SkillName'},
		{headerName: 'DomainName', field: 'DomainName'},
		{headerName: 'SkillLevel', field: 'SkillLevel'}
	];
	rowData:any;
	/*rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];*/
	ngOnInit() {
		this.svc.getEmployeeDetails().subscribe(data=>{
			this.rowData=this.EmployeeDetails=data.recordset
			console.log("we got",this.EmployeeDetails);
			console.log("we got",this.rowData);
    });
  }
 
}
