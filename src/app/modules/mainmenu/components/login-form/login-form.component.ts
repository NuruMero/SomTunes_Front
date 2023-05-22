import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.goBack();
    })
    .catch(error => console.log(error));
  }

  googlePopUp() {
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.goBack();
    })
    .catch(error => console.log(error));
  }
}
