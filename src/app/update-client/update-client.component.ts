import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/model/client';
import { ClientApiService } from '../share/client-api.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id;
  object =new client
  constructor(private serv :ClientApiService,private router :Router, private activeRouter :ActivatedRoute) {
  this.id =  this.activeRouter.snapshot.paramMap.get("id")
  this.serv.getById(this.id).subscribe((data:any)=>{
    this.object=data;
  })
   }
  
  ngOnInit(): void {
  }
  update(){
    this.serv.put(this.object,this.id).subscribe(data=>{
       this.router.navigateByUrl("listC")
    })
  }

}
