import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginData={
    username: '',
    password: '',
  };
  constructor(private snack: MatSnackBar, private login:LoginService, private router: Router){
  }
  ngOnInit():void{
  }

  formSubmit(){
    console.log("login form submit");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open('username is required ', 'ok', {
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open('password is required ', 'ok', {
        duration:3000,
      });
      return;
    }

    //request to server for generate the tokens
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);  

        //login 
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            if(this.login.getUserRole()=="ADMIN"){
 //redirect:   Admin admmin page                            for redirect : 2 concepts : one is location   window.location.href and other is router
           //  window.location.href='/admin' 
              this.router.navigate(['admin'])
            }else if(this.login.getUserRole()=="NORMAL"){
 //redirect : normal user normal page
        //   window.location.href="/user-dashboard"
           this.router.navigate(['user-dashboard/0'])
            }else{
              this.login.logout();
            }
          }
        )
      },
      (error)=>{
        console.log('Error !!');
        console.log(error);
        this.snack.open('Invalid credentials !! try again ', 'ok' ,{
          duration:3000,
        });
      }
      )


  }



}