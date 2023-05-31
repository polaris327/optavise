import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Employee } from './interfaces/employee.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  departments: string[] = [];
  selectedDepartment: string = '';
  page: number = 1;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
  }

  getEmployees() {
    this.dataService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees.map(employee => ({
        ...employee,
        vip: this.isBefore(employee.dateOfHire)
      }));
      this.employees.sort((a, b) => {
        if (a.dateOfHire > b.dateOfHire) {
          return -1;
        }
        if (a.dateOfHire < b.dateOfHire) {
          return 1;
        }
        return 0;
      });
    });
  }

  getDepartments() {
    this.dataService.getDepartments().subscribe((departments: string[]) => {
      this.departments = departments;
    });
  }

  isBefore(date: string) {
    const year = new Date(date).getFullYear();
    return year < 2020;
  }

}
