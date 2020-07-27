const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignments-model');

router.post('/get-assignments', (req, res) =>{
    Assignment.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester})
        .then(assignments =>{
            let assignmentsArray = assignments; 
            Assignment.find({collegeId: req.body.collegeId, atype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electiveassignments =>{
                    electiveassignments.forEach(item =>{
                        assignmentsArray.push(item);
                    });
                    res.json({assignments: assignmentsArray})
                })
                .catch(err =>{
                    console.log(err)
                    res.json({message: err});
                })  
        })
        .catch(err =>{
            console.log(err)
            res.json({message: err});
        })
})

module.exports = router; 