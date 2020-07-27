const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./config/keys').mongoURI;

const app = express();

//connecting mongodb 
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//requiring routes 
app.use('/', require('./routes/subject-route'));
app.use('/', require('./routes/paper-route'));
app.use('/', require('./routes/notes-route'));
app.use('/', require('./routes/books-route'));
app.use('/', require('./routes/youtube-route'));
app.use('/', require('./routes/project-route'));
app.use('/', require('./routes/assignments-route'));
app.use('/', require('./routes/elective-subject-route'));

app.listen(port, () => console.log(`Server running on port ${port}`))