const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    projectBy: {
        type: String
    },
    projectTopic: {
        type: String
    },
    projectType : {
        type: String //0 : hand written , 1 : typed, 2 : ppt
    },
    downloads: {
        type: Number,
        default : 0      //total number of downloads
    },
    views: {
        type: Number,
        default : 0        //total number of views
    },
    degreeType: {
        type: String    //[B. Tech. , M. Tech ]
    },
    collegeId : {
        type: String
    },
    subjectId : {
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
    uploadedBy: {
        type: String
    },
    uploadedOn: {
        type: String
    },
    link : {
        type: String
    },
    ptype: {
        type: String
    }
});

const Project = mongoose.model('projects', projectSchema);
module.exports = Project;


