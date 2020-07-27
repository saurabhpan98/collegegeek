const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const assignmentSchema = new Schema({
    assignmentBy: {
        type: String
    },
    assignmentTopic: {
        type: String
    },
    assignmentType : {
        type: String       //0 : hand written , 1 : typed, 2 : ppt
    },
    downloads: {
        type: Number      //total number of downloads
    },
    views: {
        type: Number      //total number of views
    },
    collegeId : {
        type: String
    },
    subjectId : {
        type: String
    },
    semester : {
        type: String
    },
    branch : {
        type: String
    },
    degreeType: {
        type: String    //[B. Tech. , M. Tech ]
    },
    year : {
        type: Number
    },
    uploadedBy: {
        type: String
    },
    uploadedOn: {
        type: String
    },
    link : {
        type: String
    },
    atype: {
        type: String
    }

});

const Assignment = mongoose.model('assignments', assignmentSchema);
module.exports = Assignment;

