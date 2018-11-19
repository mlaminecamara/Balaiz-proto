import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfiles {
  token: String = '';
  data: any;
  message = '';
  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }

  MatchingProfiles() {
    this.http.post('http://localhost:8080/api/profiles', this.data);
  }
}

