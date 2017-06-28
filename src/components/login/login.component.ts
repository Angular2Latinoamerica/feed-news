import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email:String = "";
  password:String = "";

  constructor(private userService: UserService) {

  }

  onLogin() {
    this.userService.login(this.email, this.password)
      .then(user => {
        console.log(user);
        // TODO: Navegar a Home
      })
      .catch(err => {
        console.log(err);
        alert(err.message);
        // TODO: Avisar al usuario
      });
  }

}