import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTkyMTE3NDE0ZmVmMDI4Y2MyZDg4NCIsImVtYWlsIjoidXNlcjNAdGVzdC5jb20iLCJzdGF0dXMiOiJhcHBsaWNhbnQiLCJpYXQiOjE1Mzc5ODg4Njd9.yykpzfN2yp-0vQZx6a1HBq_a5RQ39cdvY5GHkxsnliM"
    })
  }

  @Injectable({
    providedIn: 'root'
  })

export class ApplicantService {

constructor(private http: HttpClient, private router: Router) {

}
    addApplicant(update) {
        const addedApplicant = {"update":"test"}
        // console.log(addedApplicant)
        return this.http.post('http://localhost:8080/api/applicant', addedApplicant, httpOptions)
        .pipe(map(res => console.log(res)))
        .subscribe(res => res)
    }
}

