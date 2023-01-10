import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http: HttpClient) {
   }
   
   //generate token
   public generateToken(loginData:any){
    return this.http.post('http://localhost:8003/generate-token', loginData);
   }

   
   //login user
   public loginUser(token:any){
    localStorage.setItem('token', token);
    this.loginStatusSubject.next(true);
    return true;
   }

   //is login or not
   public isloggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null){
      return false;
    }else{
      return true;
    }
   }

   //current user details
   public getCurrentUser(){
    return this.http.get('http://localhost:8003/current-user')
   }

   //for logout : remove token from localstorage
   public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
   }

   //get token from local storage
   public getToken(){
    return localStorage.getItem('token');
   }

   //set user details
   public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
   }

   //get user
   public getUser(){
     let userStr =localStorage.getItem('user');
     if(userStr!=null){
      return JSON.parse(userStr);
     }else{
      //this.logout();
      return null;
     }
   }

   //get user role
   public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
   }

  }