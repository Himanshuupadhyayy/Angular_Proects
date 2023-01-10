import { Component } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {


  user:User =new User();

  constructor(private registerService: RegisterServiceService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
     alert("Successfully User is register?")
    },error=>alert("Sorry User not register"));
  }
}
