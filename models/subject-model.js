const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    collegeId : {
        type: String
    },
    subjectName : {
        type: String
    },
    subjectCode : {
        type: String
    },
    degreeType : {
        type: String
    },
    branch : {
        type: String
    },
    year : {
        type: Number
    },
    semester : {
        type: Number
    }
});

const Subject = mongoose.model('subjects', newSchema);

module.exports = Subject; 