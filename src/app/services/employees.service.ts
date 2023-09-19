import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseAPiUrl: string = environment.baseAPiUrl;

  constructor(private http: HttpClient) { }

//get method
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseAPiUrl + '/api/employees');

  }
//post method
  addEmployee(addEmployeeRequest: Employee):  Observable<Employee> {
    addEmployeeRequest.id = '0'
   return this.http.post<Employee>(this.baseAPiUrl + '/api/employees', addEmployeeRequest);
  }

  getEmployee(id: string) :  Observable<Employee> {
    return this.http.get<Employee>(this.baseAPiUrl + '/api/employees' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee):  Observable<Employee>  {
    return this.http.put<Employee>(this.baseAPiUrl + '/api/employees' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: string): Observable<Employee>  {
    return this.http.delete<Employee>(this.baseAPiUrl + '/api/employees' + id);
  }

}
