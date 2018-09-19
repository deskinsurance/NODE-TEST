import { Component, OnInit } from '@angular/core';
import {EmployeeDetails} from '../model/home.model';
import {HomeService} from '../services/home.service';
import {IEmployeeDetails} from '../model/home.model';
import {Routes,RouterModule, Router, ActivatedRoute} from '@angular/router'
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [HomeService]
})
export class HomeComponent implements OnInit {
	EmployeeDetails:IEmployeeDetails[];
	Department:Array<any>=[];
	SkillName:Array<any>=[];
	UserName='';
  constructor(private svc:HomeService,private authService:AuthService,private router:Router) 
		{ 
			this.authService.getUserName().subscribe(
			data=>this.UserName=data.toString(),
			error=>this.router.navigate(['/login'])
			)
		}  
	rowData:any;	
	ngOnInit() {
		this.svc.getEmployeeDetails().subscribe(data=>{
			this.rowData=this.EmployeeDetails=data[0]
			this.EmployeeDetails.forEach(item=>{
				let newitem ={label: item.Department.toString(), value: item.Department.toString()};
				let Skills ={label: item.SkillName.toString(), value: item.SkillName.toString()};
			this.Department.push(newitem);
			this.SkillName.push(Skills)
			})
			console.log("we got",this.EmployeeDetails);
			console.log("we got",this.rowData);
    });
	}
	
	logout() {
 localStorage.removeItem('token');
 this.router.navigate(['/login']);
	}
 
}
