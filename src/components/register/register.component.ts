import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email:String = "";
  password:String = "";
  confirm:String = "";

  constructor(private userService: UserService) {

  }

  onRegister() {
    this.userService.register(this.email, this.password, this.confirm)
      .then(result => {
        alert("Usuario registrado");
      })
      .catch(err => {
        alert(err.message);
      });
  }
}