const express = require('express');
const router = express.Router();
const Youtube = require('../models/youtube-model');

router.post('/get-youtubes', (req, res) =>{
    //console.log(req.body)
    Youtube.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester})
        .then(youtubes =>{
            let youtubesArray = youtubes; 
            Youtube.find({collegeId: req.body.collegeId, ytype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electiveyoutubes =>{
                    electiveyoutubes.forEach(item =>{
                        youtubesArray.push(item);
                    });
                    res.json({youtubes: youtubesArray})
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