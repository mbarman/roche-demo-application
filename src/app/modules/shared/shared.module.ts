import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



const materialModules = [
 MatButtonModule,
 MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...materialModules
  ],
  exports: [CommonModule, ...materialModules]
})
export class SharedModule { }
