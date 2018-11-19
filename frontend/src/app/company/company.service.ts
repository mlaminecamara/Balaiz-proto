import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('jwtToken'),
  }),
};

@Injectable({
    providedIn: 'root'
  })

export class CompanyService {
 public data: any;
constructor(private http: HttpClient, private router: Router) {}

    addCompany(update) {
      // console.log('cc');
      const addedCompany = update;
      console.log(addedCompany);
      const test = JSON.stringify(addedCompany);
      console.log(test);
      this.http.post('http://localhost:8080/api/company', test, httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
    }


  ShowCompany() {
  this.http.get('http://localhost:8080/api/company', httpOptions)
  .subscribe(res => {
    console.log(res);
  });

  }

}
