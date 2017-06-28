import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

    constructor(private fbAuth: AngularFireAuth) {

    }

    login(email, password) {
        return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
    }

    register(email, password, confirm) {
        if (password !== confirm) {
            return Promise.reject("Las contraseñas no coinciden");
        }

        // TODO: Checar si el email está verificado

        return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
    }


    forget(email) {
        return this.fbAuth.auth.sendPasswordResetEmail(email);
    }

}