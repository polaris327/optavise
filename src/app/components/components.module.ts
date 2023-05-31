import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeComponent,
    TagComponent
  ]
})
export class ComponentsModule { }
