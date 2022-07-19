import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {catchError, Subscription, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginFormGroup: FormGroup;
  userSub: Subscription | null = null


  constructor(private authService: AuthService, private router: Router) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    })
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.userSub = this.authService.logIn(this.loginFormGroup.value)
      .pipe(catchError((err) => {
        this.authService.openSnackBar(err)
        return throwError(err);
      }))
      .subscribe(
        user =>
          this.router.navigate(['/book'])
      )
    this.loginFormGroup.reset()
  }

  logInWithGoogle() {
    this.userSub = this.authService.signUpWithGoogle()
      .pipe(catchError((err) => {
        this.authService.openSnackBar(err)
        return throwError(err);
      }))
      .subscribe(
        user =>
          this.router.navigate(['/book'])
      )
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe()
  }

}
