import mongoose from 'mongoose';

const CourseScheme = new mongoose.Schema({
    Name: String,
    points: Number,
});

export default mongoose.model('Course', CourseScheme);