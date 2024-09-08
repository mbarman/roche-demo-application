import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';
import { SkillsService } from './services/skills.service';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    SkillRoutingModule,
    CommonModule
  ],
  providers: [SkillsService]
})
export class SkillsModule { }
