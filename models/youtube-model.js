const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const youtubeSchema = new Schema({
  collegeId : {
    type: String
  },
  subjectId : {
    type: String
  },
  playlistName : {
    type: String
  },
  teacherName : {
    type: String
  },
  degreeType: {
    type: String    //[B. Tech. , M. Tech ]
  },
  branch : {
    type: String
  },
  year: {
    type: Number
  },
  semester: {
    type: Number
  },
  uploadedBy: {
    type: String
  },
  link : {
    type: String
  },
  thumbId : {
    type: String
  },
  ytype: {
    type: String
  }
});

const YoutubePlaylist = mongoose.model('youtubes', youtubeSchema);
module.exports = YoutubePlaylist;
