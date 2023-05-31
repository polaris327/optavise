import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

	getEmployees(): Observable<Employee[]> {		
		return this.http.get<Employee[]>(`${environment.domain}/v2/employees`);
	}

	getDepartments(): Observable<string[]> {		
		return this.http.get<string[]>(`${environment.domain}/v2/departments`);
	}
}
