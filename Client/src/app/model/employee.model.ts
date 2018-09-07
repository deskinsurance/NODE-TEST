export interface IEmployee {
    EmpID:number;
    Name:string;
    EmpCode:string;
    Salary:number;
}

export class Employee implements IEmployee {
    constructor(public EmpID:number, public Name:string,public EmpCode:string,public Salary:number){}
}

