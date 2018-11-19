import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: String = '';
  data: any;
  message = '';
  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }

  signinUser(email: string, password: string) {
    const loginData = { email: email, password: password };
    this.http.post('http://localhost:8080/auth/login', loginData).subscribe(resp => {
      this.data = resp;
      console.log(this.data);
      localStorage.setItem('jwtToken', this.data.token);
      if (this.data.status === 'Candidat') {
        this.router.navigate(['applicant']);
      } else if (this.data.status === 'Entreprise') {
        this.router.navigate(['recruiter']);
      }
      return;
    });
  }

  register(firstname: string, lastname: string, email: string, password: string, status: string) {
    const registerData = {firstname: firstname, lastname: lastname, email: email, password: password, status: status};
    // console.log(registerData);
    this.http.post('http://localhost:8080/auth/register', registerData, {responseType: 'text'})
    .subscribe((res) => {
      console.log('c');
      this.router.navigate(['login']);
    });
  }

  logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    // confirm(token);
    // If token not expired, return true
    if (token != null) {
      return !this.jwtHelper.getTokenExpirationDate(token) || !this.jwtHelper.isTokenExpired(token);
    }
  }



}
