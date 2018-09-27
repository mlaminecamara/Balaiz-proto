import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';



  @Injectable({
    providedIn: 'root'
  })

export class ApplicantService {

constructor(private http: HttpClient, private router: Router) {

}
    // addApplicant(update) {
    //     const addedApplicant = {"update":"test"}
    //     // console.log(addedApplicant)
    //     return this.http.post('http://localhost:8080/api/applicant', addedApplicant)
    //     .pipe(map(res => console.log(res)))
    //     .subscribe(res => res)
    // }
}

