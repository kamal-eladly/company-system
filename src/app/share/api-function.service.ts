import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<T> {
 
  constructor(@Inject(String) public apiUrl:string,public http :HttpClient) {}
  get() :Observable<T>{
    return this.http.get<T>(this.apiUrl)
  }
  getById(id) :Observable<T>{
    return this.http.get<T>(this.apiUrl + `/${id}`)
  }
  post(object):Observable<T>{
    return this.http.post<T>(this.apiUrl,object)
  }

  put(object,id){
    return this.http.put(this.apiUrl + `/${id}`,object)
  }
 

  delete(id):Observable<employee>{
    return this.http.delete<employee>(this.apiUrl+`/${id}`)
  }

}
