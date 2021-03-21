
const mongoose = require('mongoose');
const {Schema} = mongoose;

const collegeSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    yearFounded: Number,
    city: String,
    state: String,
    country: String,
    numStudents: Number,
    courses: Array,


})

const studentSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: Number, required: true},
    batchYear: Number,
    collegeId: {type: Number, ref: 'colleges'},
    skills: Array,

})

mongoose.model('colleges', collegeSchema);
mongoose.model('students', studentSchema);