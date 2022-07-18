import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

interface User {
  name?: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private auth: AngularFireAuth, private router: Router) {
  }

  getDataFromYandex() {
    return this.http.get('https://ya.ru/')
  }

  getUser() {
    return this.auth.user
  }

  createUser(user: User) {
    this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        this.router.navigate(['/book'])
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  logIn(user: User) {
    this.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        this.router.navigate(['/book'])
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  logOut() {
    this.auth.signOut()
    this.router.navigate(['/'])
  }

}
