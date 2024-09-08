import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  employees: Array<Employee> = [];
  displayedColumns: string[] = [];

  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit(): void {

    this.employees = this.empService.getEmployees();
    this.displayedColumns = ['id', 'firstName', 'lastName', 'department', 'actions'];

  }

  showDetails(data: Employee) {
    this.router.navigate(['skills', data.id]);
  }

}
