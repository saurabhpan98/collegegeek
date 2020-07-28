const express = require('express');
const router = express.Router();
const Notes = require('../models/notes-model');

router.post('/get-notes', (req, res) =>{
    Notes.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester, ntype: "regular"})
        .then(notes =>{
            let notesArray = notes; 
            Notes.find({collegeId: req.body.collegeId, ntype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electivenotes =>{
                    electivenotes.forEach(item =>{
                        notesArray.push(item);
                    });
                    res.json({notes: notesArray})
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