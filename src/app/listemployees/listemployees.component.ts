import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionService } from '../share/api-function.service';
import { EmployeeApiService } from '../share/employee-api.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
allData:[];
  constructor(private serv:EmployeeApiService, private router:Router){
    this.serv.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }

  remove(id){
    this.serv.delete(id).subscribe(data=>{
      window.location.reload();
    })
  }

  ngOnInit(): void {
  }

}
