import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SkillsService } from '@modules/skills/services/skills.service';
import { Employee } from 'app/models/employee';
import { Skill } from 'app/models/skill';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  private empId: number | undefined;
  protected emp: Employee | undefined;
  protected skills: string[] | undefined;

  constructor(private empService: EmployeeService,
     private router: Router,
     private aRoute: ActivatedRoute,
     private skillService: SkillsService) {}

  ngOnInit(): void {
    this.initiateParamSubscription();
  }
  initiateParamSubscription(): void {
    this.aRoute.params.subscribe(param => {
      this.empId = +param['id'];
      this.getDeatils(this.empId);
    })
  }
  getDeatils(empId: number): void {
    this.emp = this.empService.getEmployee(empId);
    if (this.emp) {
      this.skills = this.skillService.getSkillDetails(this.emp.deptId)?.skills;
    }
  }

  goBack() {
    this.router.navigate(['employee']);
    }

}
