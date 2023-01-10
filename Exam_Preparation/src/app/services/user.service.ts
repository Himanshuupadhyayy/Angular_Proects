import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //addd user
  public addUser(user:any){
    return this.http.post('http://localhost:8003/user/', user);
  }

}