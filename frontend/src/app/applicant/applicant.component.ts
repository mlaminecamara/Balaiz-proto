import { Component } from "@angular/core";
import { ApplicantService } from "../applicant.service";

@Component({
    selector:'app-applicant',
    templateUrl:'./applicant.component.html',
    styleUrls:['./applicant.component.css'],
    providers:[ApplicantService]
})
export class ApplicantComponent{

    constructor(private ApplicantService: ApplicantService){

    }

}