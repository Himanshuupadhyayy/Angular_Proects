import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  baseUrl="http://localhost:8181/user";
  constructor(private httpClient: HttpClient) { }


  registerUser(user: User): Observable<Object> {
     console.log(user);
     return this.httpClient.post(`${this.baseUrl}`,user);
  }}
