import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import { UserProfiles } from '../userprofiles.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private authservice: AuthService,
    private companyservice: CompanyService,
    private userprofileservice: UserProfiles) { }

    Duration = ['3 mois', '4 mois', '5 mois', '6 mois'];
    FrontEnd_Stack = ['Angular', 'Angularjs', 'BackboneJs', 'Blade', 'EmberJs', 'Jade',
    'JQuery', 'Pug', 'React', 'Twig', 'Vue', 'Phonegap', 'ionic', 'Android Studio', 'React Native'];
    Database = ['MongoDB', 'SQL', 'Graph'];
    BackEnd_Stack = ['PHP', 'NodeJS', 'Python', 'JAVA', 'C#'];
    Framework_Back = ['Symfony', 'Express', 'JEE',
    'Hibernate', 'Spring', 'Django', '.NET', 'Laravel', 'Ruby on Rails',
    'Hapi', 'Koa', 'Sails', 'CakePHP', 'CodeIgniter', 'FuelPHP', 'Slim', 'Flask'];
    Tags = ['Mobile', 'Full-stack', 'Back-end', 'Front-End', 'IoT', 'Security'];

  ngOnInit() {
  }

  onPost(form: NgForm) {
    const value = form.value;
    // console.log(value);
    this.companyservice.addCompany(value);
}

onShow() {
    this.companyservice.ShowCompany();
}


OnLogout(form: NgForm) {
        this.authservice.logout();
}

userProfiles() {
  this.userprofileservice.MatchingProfiles();
}

}
