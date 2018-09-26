import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import User from './userModel';

let CompanySchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:User},

    Company_Name: {type:String, required:"Le nom de l'entreprise est obligatoire"},

    Contact_Name:{type:String},

    Contact_Position:{type:String},

    Contact_Email: String,

    Contact_Tel: Number,

    Company_Industry:  {type:String, required:"Renseignez votre industrie"},
    
    Internship_Startdate:{type:Date, required:"Renseignez la date de début du stage"},

    Duration: {type: String , enum: ['3 mois', '4 mois', '5 mois', '6 mois'], required:"La durée du stage est obligatoire"},

    Mission_Description:String,

    FrontEnd_Stack: {type: String,
        enum:['Angular', 'Angularjs','BackboneJs', 'Blade','EmberJs','Jade',
        'JQuery','Pug','React','Twig','Vue','Phonegap','ionic',
        'Android Studio','React Native'], 
        required:"Selectionnez au moins une stack FrontEnd"},

    BackEnd_Stack: {type: String, 
        enum:['PHP', 'NodeJS','Python','JAVA','C#'], 
        required:"Selectionnez au moins une stack BackEnd"},

    Framework_Back:{type:String, enum:['Symfony','Express','JEE',
        'Hibernate','Spring','Django','.NET', 'Laravel','Ruby on Rails',
        'Hapi','Koa','Sails','CakePHP','CodeIgniter','FuelPHP','Slim','Flask'
        ]},
    
    Database:{type: String , enum: ['MongoDB', 'SQL', 'Graph'], required:"Selectionnez au moins une base de données"},

    created_at: Date,

    updated_at: Date

});

let Company = mongoose.model('Company',CompanySchema);

export default Company;