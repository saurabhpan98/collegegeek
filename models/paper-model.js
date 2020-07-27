const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    semType : {
        type: String
    },
    downloads : {
        type: Number
    },
    degreeType : {
        type: String
    },
    views : {
        type: Number
    },
    collegeId : {
        type: String
    },
    subjectId  : {
        type: String
    },
    semester : {
        type: Number
    },
    branch : {
        type: String
    },
    year : {
        type: Number
    },
    paperYear: {
        type: String
    },
    link : {
        type: String
    },
    ptype: {
        type: String
    }
});

const Paper = mongoose.model('papers', newSchema);

module.exports = Paper; 