const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    bookBy: {
        type: String
    },
    bookName : {
        type: String
    },
    bookPrice : {
        type: String
    },
    collegeId : {
        type: String
    },
    degreeType: {
        type: String    //[B. Tech. , M. Tech ]
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
    views: {
        type: Number
    },
    downloads: {
        type: Number
    },
    link : {
        type: String
    },
    btype: {
        type: String
    }
});

const Books = mongoose.model('books', bookSchema);
module.exports = Books;

