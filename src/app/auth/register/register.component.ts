import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private authService: AuthService) {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.createUser(this.registerFormGroup.value)
    this.registerFormGroup.reset()
  }


}
