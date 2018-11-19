import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public statusApplicant = false;
  public statusRecruiter = false;
  public choix = [
    {id: 1, name: 'Candidat'},
    {id: 2, name: 'Entreprise'},
  ];
  selected = this.choix[0];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
      // console.log(this.statusApplicant);
      // console.log(this.statusRecruiter);
      const firstname = form.value.firstname;
      const lastname = form.value.lastname;
      const email = form.value.email;
      const password = form.value.password;
      const status = form.value.status.name;
      this.authService.register(firstname, lastname, email, password, status);

  }

}
