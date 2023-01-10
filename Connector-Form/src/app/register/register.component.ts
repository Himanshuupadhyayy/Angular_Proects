import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Connector } from '../connector';
import { Connectordoc } from '../connectordoc';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  connector:Connector =new Connector();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.connector);
//    console.log(this.connectorDoc);
    this.registerService.registerUser(this.connector).subscribe(data=>{
     alert(" User is register Successfully.")
    },error=>alert("Sorry, User is not register"));
  }
}
