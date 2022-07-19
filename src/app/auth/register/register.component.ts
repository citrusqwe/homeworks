import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {catchError, Subscription, throwError} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerFormGroup: FormGroup;
  userSub: Subscription | null = null

  constructor(private authService: AuthService, private router: Router) {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    })
  }

  onSubmit() {
    this.userSub = this.authService.createUser(this.registerFormGroup.value)
      .pipe(catchError((err) => {
        this.authService.openSnackBar(err)
        return throwError(err);
      }))
      .subscribe(
        user =>
          this.router.navigate(['/book'])
      )
    this.registerFormGroup.reset()
  }

  signUpWithGoogle() {
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

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.userSub?.unsubscribe()
  }

}
