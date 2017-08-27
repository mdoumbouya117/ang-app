import { Component, OnInit } from '@angular/core';
import { MdInputModule, MdInputContainer } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  firstName: string;
  name: string;
  email: string;
  phone: string;
  password: string;

  constructor(public fb: FormBuilder) {
    this.loginForm = fb.group({
      'firstName': [null, Validators.required],
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required,
        CustomValidators.pattern(/^[a-z0-9_]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/ig)
      ])],
      'phone': [null, Validators.compose([Validators.required,
        CustomValidators.pattern(
          // /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/
        /^(601|621|622|628|631|655|657|662|664|666|669)\*[1-9](?:[\s.-]*\d{2}){4}$/
        )
    ])],
      'password': [null, Validators.required]
    });
  }

  onSubmit(e: Event) {
    console.log(e);
  }

  ngOnInit() {
  }

}
