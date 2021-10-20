import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../share/client-api.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  allData:[];
  constructor(private serv:ClientApiService, private router:Router){
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
