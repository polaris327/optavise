import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'optavise-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Input()
  employee!: Employee;
}
