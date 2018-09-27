import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: ApplicantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ApplicantComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    CompanyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
