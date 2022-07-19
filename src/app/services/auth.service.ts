import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {from} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import firebase from "firebase/compat/app";

interface User {
  name?: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private auth: AngularFireAuth, private router: Router, private _snackBar: MatSnackBar) {
  }

  getUser() {
    return this.auth.user
  }

  createUser(user: User) {
    return from(this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        return userCredential
      })
      .catch((error) => {
        throw new Error(error)
      }))
  }

  logIn(user: User) {
    return from(this.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        return userCredential
      })
      .catch((error) => {
        throw new Error(error)
      }))
  }

  signUpWithGoogle() {
    return from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredential) => {
        return userCredential
      })
      .catch((error) => {
        throw new Error(error)
      }))
  }

  logOut() {
    this.auth.signOut()
    this.router.navigate(['/'])
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}
