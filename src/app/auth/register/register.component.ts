import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor() {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(3), Validators.max(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(30)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerFormGroup)
  }

}
