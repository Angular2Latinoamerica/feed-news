import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private auth: AngularFireAuth, private router: Router) {
        if (!this.auth.auth.currentUser) {
            this.router.navigate(["/login"]);
        }
    }

}