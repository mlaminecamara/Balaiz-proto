import { Component, OnInit } from "@angular/core";
import { ApplicantService } from "../applicant.service";
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector:'app-applicant',
    templateUrl:'./applicant.component.html',
    styleUrls:['./applicant.component.css'],
    providers:[ApplicantService]
})
export class ApplicantComponent implements OnInit{
    model: object = {};
    DropDowns:FormGroup;


    constructor(private ApplicantService: ApplicantService, private fb: FormBuilder)
    {

    }
    Ed_Type = ['Bootcamp','Computer Science School','University', 'Self taught', 'Engineering School']
    Duration = ['3 mois', '4 mois', '5 mois', '6 mois']
    Last_Internship = ['oui', 'non']
    Active_Status = ['oui', 'non']
    Webdev_Experience = ['oui', 'non']
    FrontEnd_Stack = ['Angular', 'Angularjs','BackboneJs', 'Blade','EmberJs','Jade',
    'JQuery','Pug','React','Twig','Vue','Phonegap','ionic','Android Studio','React Native']
    Database = ['MongoDB', 'SQL', 'Graph']
    BackEnd_Stack= ['PHP', 'NodeJS','Python','JAVA','C#']
    Framework_Back= ['Symfony','Express','JEE',
    'Hibernate','Spring','Django','.NET', 'Laravel','Ruby on Rails',
    'Hapi','Koa','Sails','CakePHP','CodeIgniter','FuelPHP','Slim','Flask']
    Tags= ['Mobile','Full-stack','Back-end','Front-End', 'IoT', 'Security']
    

    ngOnInit(){
        this.DropDowns = this.fb.group({
            Ed_Type: [''],
            Duration:[''],
            Last_Internship: [''],
            Active_Status : [''],
            Webdev_Experience : [''],
            FrontEnd_Stack: [''],
            Database:[''],
            BackEnd_Stack :[''],
            Framework_Back :[''],
            Tags: [''],
        })
    }

    
    onPost(form : NgForm){
        const value = {
            fields: form.value
        }
        console.log(value);
        this.ApplicantService.addApplicant(value);
        }

}