import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from 'src/model/employee';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService extends ApiFunctionService<employee> {

  constructor(http:HttpClient) {
    super("http://localhost:3000/employees",http)
   }
}
