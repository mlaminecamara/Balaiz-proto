import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwtToken')
    })
  }

export class ApplicantService{

constructor(private http: HttpClient,private router: Router){

    }

    addApplicant(){
        const addedApplicant = {}
        return this.http.post('http://localhost:8080/api/applicant', addedApplicant, httpOptions)
        .pipe(map(res => console.log(res)))
        .subscribe(res => res)
    }
    

}

