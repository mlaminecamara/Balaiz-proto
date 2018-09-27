import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: object = {};
  message = '';
  data: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.authService.isAuthenticated)
    if (this.authService.isAuthenticated() === true) {
      this.router.navigate(['home']);
    }
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

}
