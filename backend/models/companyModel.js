import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let CompanySchema = new Schema({
    Name: String,
    email: String,
    password: String
});

// userSchema.plugin(passportLocalMongoose);

let Company = mongoose.model('Company',userSchema);

export default Company;