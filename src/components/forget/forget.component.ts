import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'forget',
  templateUrl: './forget.component.html'
})
export class ForgetComponent {

  email:String = "";

  constructor(private userService: UserService) {

  }

  onReset() {
    this.userService.forget(this.email)
      .then(result => {
        alert("Checa tu correo");
      })
      .catch(err => {
        alert(err.message);
      });
  }

}