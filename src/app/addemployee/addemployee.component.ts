import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/model/employee';
import { ApiFunctionService } from '../share/api-function.service';
import { EmployeeApiService } from '../share/employee-api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {


object =new employee
  constructor(private serv :EmployeeApiService,private router :Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data=>{
       this.router.navigateByUrl("listEmp")
    })
  }
}
