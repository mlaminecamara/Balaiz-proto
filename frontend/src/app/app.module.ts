import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { CompanyComponent } from './company/company.component';


const routes : Routes= [
  {
    path:'applicant',
    component: ApplicantComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    CompanyComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwtToken');
        },
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/api/']
      }
    }),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
