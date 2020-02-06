import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './config';
import * as firebase from 'firebase';

import Home from './components/home';
import ResourcesPage from './components/resources';
import Notes from './components/notes';
import Contact from './components/contact';
import About from './components/about';
import Faq from './components/faq';
import SearchCollege from './components/search-college';

class App extends Component{
  state = {
    collegeName: '',
    branch: '',
    year: '',
    semester: ''
  };

  componentDidMount(){
    /*firebase.database().ref("subjects").push({
      collegeId : "-M-5D9qsM3ulFs1G10cy",
      subjectName : "Professional Ethics & Human Values",
      subjectCode : "HU-303",
      degreeType : "B.Tech",
      branch : "Computer Engineering",
      year : 3,
      semester : 5
    })*/
  }

  render(){
    return(
      <Router>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/resources' component={ResourcesPage} />
        <Route path='/notes' component={Notes} />
        <Route path='/faq' component={Faq} />
        <Route path='/search-college' component={SearchCollege} />
      </Router>
    )
  }
}

export default App;
