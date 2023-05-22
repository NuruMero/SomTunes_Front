import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/userservice/user.service';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  currentUser = this.auth.currentUser;

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: Auth = getAuth()
    )
  {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = this.auth.currentUser;
      } else {
        this.currentUser = null;
      }
    })
  }


  logout() {
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}
