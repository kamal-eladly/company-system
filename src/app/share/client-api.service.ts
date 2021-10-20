import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from 'src/model/client';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService extends ApiFunctionService<client> {

  constructor(http:HttpClient) {
    super("http://localhost:3000/clients",http)
   }
}
