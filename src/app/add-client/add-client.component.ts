import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/model/client';
import { ClientApiService } from '../share/client-api.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  object =new client
  constructor(private serv :ClientApiService,private router :Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data=>{
       this.router.navigateByUrl("listC")
    })
  }

}
