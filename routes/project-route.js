const express = require('express');
const router = express.Router();
const Project = require('../models/projects-model');

router.post('/get-projects', (req, res) =>{
    Project.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester, ptype: "regular"})
        .then(projects =>{
            let projectsArray = projects; 
            Project.find({collegeId: req.body.collegeId, ptype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electiveprojects =>{
                    electiveprojects.forEach(item =>{
                        projectsArray.push(item);
                    });
                    res.json({projects: projectsArray})
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