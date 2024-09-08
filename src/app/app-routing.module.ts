import { SkillsModule } from './modules/skills/skills.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
      path: 'skills',
      loadChildren: () => import('@modules/skills/skills.module').then(mod => mod.SkillsModule)
  },
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
