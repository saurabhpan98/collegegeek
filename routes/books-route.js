const express = require('express');
const router = express.Router();
const Books = require('../models/books-model');

router.post('/get-books', (req, res) =>{
    Books.find({collegeId: req.body.collegeId, branch: req.body.branch, year: req.body.year, semester: req.body.semester, btype: "regular"})
        .then(books =>{
            let booksArray = books; 
            Books.find({collegeId: req.body.collegeId, btype: "elective", year: req.body.year, semester: req.body.semester})
                .then(electivebooks =>{
                    electivebooks.forEach(item =>{
                        booksArray.push(item);
                    });
                    res.json({books: booksArray});
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