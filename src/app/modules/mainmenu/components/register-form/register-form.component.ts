import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  formReg: FormGroup;

  constructor(private userService: UserService,
    private location: Location,
    private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response => {
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}
