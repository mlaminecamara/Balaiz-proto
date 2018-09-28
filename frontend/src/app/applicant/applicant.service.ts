import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';

const HttpOptions = 
{
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('jwtToken')
  })
}

  @Injectable({
    providedIn: 'root'
  })

export class ApplicantService {
 public data: any;
constructor(private http: HttpClient, private router: Router) {

}
    addApplicant(update ) {
      console.log("cc")
      const addedApplicant = update
      //console.log(addedApplicant)
      return this.http.post('http://localhost:8080/api/applicant', addedApplicant, HttpOptions)
      .pipe(tap(res =>{
        this.data = res;
        console.log(res);
        return this.data;
      }))
      
}
}

