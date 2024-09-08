import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';

let routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: (): Routes => {
      routes.push({
        path: ':id',
        component: SkillsComponent
      });
      return routes;
      },
      multi: true
    }
  ]
})



export class SkillRoutingModule { }
