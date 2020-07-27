const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    collegeName: {
        type: String
    },
    collegeType: {
        type: Array
    },
    degreeType : {
        type: Array
    },
    subjectNum : {
        type: Number
    },
    notesNum : {
        type: Number
    },
    assignmentNum : {
        type: Number
    },
    booksNum  : {
        type: Number
    },
    projectNum : {
        type: Number
    },
    youtubeNum : {
        type: Number
    },
    years : {
        type: Array
    },
    semester : {
        type: Array
    },
    branchOne : {
        type: Array
    }
});

const College = mongoose.model('colleges', newSchema);

module.exports = College; 