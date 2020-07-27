const express = require('express');
const router = express.Router();
const ElectiveSubject = require('../models/elective-subject-model');

router.post('/get-electives', (req, res) =>{
    ElectiveSubject.find({collegeId: req.body.collegeId, year: req.body.year, semester: req.body.semester})
        .then(electives =>{
            res.json({electives: electives})
        })
        .catch(err =>{
            console.log(err)
            res.json({message: err});
        })
})

module.exports = router; 