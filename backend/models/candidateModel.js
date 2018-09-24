import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let CandidateSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});


let Candidate = mongoose.model('Candidate',CandidateSchema);

export default Candidate;