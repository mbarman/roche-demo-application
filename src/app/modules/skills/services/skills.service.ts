import { Injectable } from '@angular/core';
import { Skill } from 'app/models/skill';

@Injectable({
  providedIn: null
})
export class SkillsService {

  constructor() { }

  skills: Skill[] = [
    {
      departmentId: 1,
      skills: ['Coding', 'Bug Fixing']
    },
    {
      departmentId: 2,
      skills: ['Employee Management', 'Recruitment']
    },
    {
      departmentId: 3,
      skills: ['Product Design', 'Requirement Gathering']
    }
  ]


  getSkillDetails(id: number): Skill | undefined {
    return this.skills.find(item => item.departmentId === id);
  }
}
