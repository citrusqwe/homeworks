import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private authService: AuthService) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    })
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.logIn(this.loginFormGroup.value)
    this.loginFormGroup.reset()
  }

}
