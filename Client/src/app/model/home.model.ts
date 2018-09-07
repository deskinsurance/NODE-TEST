export interface IEmployeeDetails {
    FirstName:string;
    MiddleName:string;
    LastName:string;
    EmployeeID:number;
    Department:string;
    SkillName:string;
    DomainName:string;
    SkillLevel:string
    							
}

export class EmployeeDetails implements IEmployeeDetails {
    constructor(public FirstName:string, public MiddleName:string,public LastName:string,public EmployeeID:number,public Department:string, public SkillName:string,public DomainName:string,public SkillLevel:string){}
}

