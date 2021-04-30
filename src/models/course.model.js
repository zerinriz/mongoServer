import mongoose from 'mongoose';

const CourseScheme = new mongoose.Schema({
    name: String,
    points: Number,
});

export default mongoose.model('Course', CourseScheme);