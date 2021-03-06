import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('jwtToken'),
  }),
};

@Injectable({
    providedIn: 'root'
  })

export class ApplicantService {
 public data: any;
constructor(private http: HttpClient, private router: Router) {}

    addApplicant(update) {
      // console.log('cc');
      const addedApplicant = update;
      console.log(addedApplicant);
      const test = JSON.stringify(addedApplicant);
      console.log(test);
      this.http.post('http://localhost:8080/api/applicant', test, httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
    }


  ShowApplicant() {
  this.http.get('http://localhost:8080/api/applicant', httpOptions)
  .subscribe(res => {
    console.log(res);
  });

  }

}

