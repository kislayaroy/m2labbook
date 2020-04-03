import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'kislaya',10000,"JAVA"),
   new Employee(1,'roy',20000,"Angular"),
   new Employee(5,'shashank',20000,"Js"),
   new Employee(4,'sahu',20000,"Java"),
   new Employee(3,'rashmi',20000,"ANGULAR")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}