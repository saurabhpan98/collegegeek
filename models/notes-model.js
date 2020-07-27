const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    notesBy: {
        type: String
    },
    notesType : {
        type: String      //0 : hand written , 1 : typed, 2 : ppt
    },
    downloads: {
        type: Number,      //total number of downloads
        default : 0
    },
    degreeType: {
        type: String    //[B. Tech. , M. Tech ]
    },
    views: {
        type: Number,      //total number of views
        default : 0
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
    notesYear: {
        type: String
    },
    link : {
        type: String
    },
    ntype: {
        type: String
    }
});

const Notes = mongoose.model('notes', notesSchema);
module.exports = Notes;

// {
// 	"notesBy" : "Gaurav Arya",
// 	"notesType": "PPT",
// 	"downloads" : "50",
// 	"degreeType" : "B. Tech.",
// 	"views" : "100",
// 	"collegeId" : "5d9440355396b963e4ed6ebd",
// 	"subjectId"  : "5d9440355396b963e4ed6ebd",
// 	"semester" : "3",
// 	"branch" : "Computer Engineering",
// 	"year" : "2",
// 	"link" : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
// }
