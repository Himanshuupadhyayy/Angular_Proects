import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connector } from './connector';
import { Observable, Observer } from 'rxjs';
import { Connectordoc } from './connectordoc';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  baseUrl="http://localhost:8006/help/connect";
  constructor(private httpClient: HttpClient) { }
 
  registerUser(connector: Connector ): Observable<Object> {
     console.log(connector);
     return this.httpClient.post(`${this.baseUrl}`,connector);   
}
}