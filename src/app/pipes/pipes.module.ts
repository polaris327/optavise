import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFilterPipe } from './department-filter.pipe';

@NgModule({
  declarations: [  
    DepartmentFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DepartmentFilterPipe
  ]
})
export class PipesModule { }
