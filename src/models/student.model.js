import mongoose from 'mongoose';

const StudentScheme = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth: Number,
    address: String
});

export default mongoose.model('Student', StudentScheme);