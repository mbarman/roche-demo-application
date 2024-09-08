import { Injectable } from '@angular/core';
import { Employee } from 'app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] =  [
    {
     id: 1,
     firstName: 'John',
     lastName: 'Smith',
     department: 'Engineering',
     country: 'USA',
     experience: '12 years',
     deptId: 1
    },
    {
     id: 2,
     firstName: 'Anna',
     lastName: 'Brown',
     department: 'Human Resource',
     country: 'Canada',
     experience: '8 years',
     deptId: 2
    },
    {
     id: 3,
     firstName: 'David',
     lastName: 'Walter',
     department: 'Product Management',
     country: 'Australia',
     experience: '18 years',
     deptId: 3
    }
   ];

  constructor() { }

  getEmployee(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }


  getEmployees(): Employee[] {
     return this.employees;
  }
}
