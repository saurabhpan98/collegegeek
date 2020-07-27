const express = require('express');
const router = express.Router();
const Subject = require('../models/subject-model');

router.post('/get-subjects', (req, res) =>{
    //console.log(req.body)
    Subject.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester})
        .then(subjects =>{
            res.json({subjects: subjects})
        })
        .catch(err =>{
            console.log(err)
            res.json({message: err});
        })
})

module.exports = router; 