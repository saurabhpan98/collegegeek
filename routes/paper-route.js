const express = require('express');
const router = express.Router();
const Paper = require('../models/paper-model');

router.post('/get-papers', (req, res) =>{
    //console.log(req.body)
    Paper.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester})
        .then(papers =>{
            let paperArray = papers; 
            Paper.find({collegeId: req.body.collegeId, ptype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electivepapers =>{
                    electivepapers.forEach(item =>{
                        paperArray.push(item);
                    });
                    res.json({papers: paperArray})
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