import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  }
  ngOnInit(): void { }
  formSubmit(){
    console.log(this.user);
      if(this.user.username=='' || this.user.password==null){
      //  alert("username and password is required ")
      this.snack.open('user name and password is requiredd !!',  'ok', {
        duration:3000,
      });
        return ;
      }
      //add user user service
      this.userService.addUser(this.user).subscribe(
        (data)=>{
          console.log(data);
          Swal.fire('success', 'user is registered', 'success');
          this.snack.open('Registered Successsfully.', 'ok' , {
           duration:3000,});
          alert('success');
        },
        (error)=>{
          console.log(error);
       
          this.snack.open('something went wrong !!!! or your username is already exist', 'ok', {
            duration:3000,});    
        }
      );
  }
  
  
}