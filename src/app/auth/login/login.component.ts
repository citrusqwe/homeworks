import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(30)]),
    })
  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginFormGroup)
  }

}
