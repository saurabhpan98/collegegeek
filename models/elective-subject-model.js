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
    degreeType: {
        type: String    //[B. Tech. , M. Tech ]
    },
    year : {
        type: Number
    },
    semester : {
        type: Number
    }
});

const ElectiveSubject = mongoose.model('electivesubjects', newSchema);
module.exports = ElectiveSubject;
