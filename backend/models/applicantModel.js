import mongoose, { models } from 'mongoose'
const Schema = mongoose.Schema;
import User from './userModel';
import passportLocalMongoose from  'passport-local-mongoose';

let ApplicantSchema = new Schema({ 

    user: {type: mongoose.Schema.Types.ObjectId, ref:User},

    firstName: {type: String, required:"Le prénom est obligatoire"},

    lastName: {type:String, required:"Le nom est obligatoire"},

    tel:{type: Number, required:"Le numéro de téléphone est obligatoire"},

    email: String,

    school: String,

    Ed_Type:{type:String,enum:['Bootcamp','Computer Science School','University', 'Self taught', 'Engineering School']},

    Github: String,

    Start_Date: {type:Date, required:"La date de début de stage est obligatoire"},

    Duration: {type: String , enum: ['3 mois', '4 mois', '5 mois', '6 mois'], required:"La durée du stage est obligatoire"},

    Max_Finish_Date:Date,

    Last_Internship: {type: String, enum:['oui', 'non']},

    Active_Status: {type: String, enum:['oui', 'non']},

    Webdev_Experience: {type: String, enum:['oui', 'non'], required:"Choisissez une réponse"},

    FrontEnd_Stack: {type: String,
        enum:['Angular', 'Angularjs','BackboneJs', 'Blade','EmberJs','Jade',
        'JQuery','Pug','React','Twig','Vue','Phonegap','ionic','Android Studio','React Native'
            ], required:"Selectionnez au moins une stack FrontEnd"},

    Projects_Description: String,

    Database:{type: String , enum: ['MongoDB', 'SQL', 'Graph'], required:"Selectionnez au moins une base de données"},

    Next_Internship_Startdate:Date,

    BackEnd_Stack: {type: String,
        enum:['PHP', 'NodeJS','Python','JAVA','C#',
            ], required:"Selectionnez au moins une stack BackEnd"},

    Framework_Back:{type:String, enum:['Symfony','Express','JEE',
    'Hibernate','Spring','Django','.NET', 'Laravel','Ruby on Rails',
    'Hapi','Koa','Sails','CakePHP','CodeIgniter','FuelPHP','Slim','Flask'
    ]},

    Tags: {type: String, enum:['Mobile','Full-stack','Back-end','Front-End', 'IoT', 'Security'] },

    created_at: Date,

    updated_at: Date
});

ApplicantSchema.plugin(passportLocalMongoose);

let Applicant = mongoose.model('Applicant',ApplicantSchema);

export default Applicant;