import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFunctionService } from 'src/app/share/api-function.service';
import { EmployeeApiService } from 'src/app/share/employee-api.service';
import { employee } from 'src/model/employee';

@Component({
  selector: 'app-update-empolyee',
  templateUrl: './update-empolyee.component.html',
  styleUrls: ['./update-empolyee.component.css']
})
export class UpdateEmpolyeeComponent implements OnInit {

 id;
object =new employee
constructor(private serv :EmployeeApiService,private router :Router, private activeRouter :ActivatedRoute) {
this.id =  this.activeRouter.snapshot.paramMap.get("id")
this.serv.getById(this.id).subscribe((data:any)=>{
this.object=data
})
 }

ngOnInit(): void {
}
update(){
  this.serv.put(this.object,this.id).subscribe(data=>{
     this.router.navigateByUrl("listEmp")
  })
}
}
