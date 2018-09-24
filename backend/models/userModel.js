import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from  'passport-local-mongoose';


let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mobile: String, 
    status: {type: String, enum: ['applicant', 'recruiter', 'admin']},
    role: {
        type: String, 
        required: () => {
            return this.status !== 'applicant';
        }
    },
    created_at: Date,
    updated_at: Date,
    last_login: Date
});

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model('User',userSchema);

export default User;