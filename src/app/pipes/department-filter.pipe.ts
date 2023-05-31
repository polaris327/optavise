import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: Employee[], department: string): Employee[] {
    return department ? (employees || []).filter(e => e.department === department) : employees;
  }

}
