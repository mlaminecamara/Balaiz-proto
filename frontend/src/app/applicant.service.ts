import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYWE0NGQyODhkOThmMjYzN2IyZDQ0YyIsImVtYWlsIjoidXNlcjRAdGVzdC5jb20iLCJzdGF0dXMiOiJhcHBsaWNhbnQiLCJpYXQiOjE1MzgwNjQ0MTN9.DgUpUABLQdVUXI-qa4Rk7LZMVwW6gD_a_hUyS3XOQF8'
    })
  }

  @Injectable({
    providedIn: 'root'
  })

export class ApplicantService{

constructor(private http: HttpClient,private router: Router)
{

}

    addApplicant(fields){
        const addedApplicant = {"fields":fields}
        console.log(addedApplicant)
        return this.http.post('http://localhost:8080/api/applicant', addedApplicant, httpOptions)
        .pipe(map(res => console.log(res)))
        .subscribe(res => res)
    }

}

