import React, {Component} from 'react';
import Tabs from './tabs';
import NotesNavbar from './notes-navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../config';
import * as firebase from 'firebase';

class Notes extends Component{
  state = {
    collegeId: '',
    collegeName: '',
    branch: '',
    year: '',
    semester: '',
    currentSubject: '',
    subjects: []
  };

  componentDidMount() {
    const formDetails = JSON.parse(localStorage.getItem('formDetails'));

    if (localStorage.getItem('formDetails')) {
      console.log(formDetails)
      this.setState({
        collegeId: formDetails.collegeId,
        collegeName: formDetails.collegeName,
        branch: formDetails.branch,
        year: formDetails.year,
        semester: formDetails.semester
      });

      firebase.database().ref("subjects").once("value").then(snapShot =>{
        var subjects = [];
        snapShot.forEach(item =>{
          if(item.val().year == formDetails.year && item.val().semester == formDetails.semester){
            subjects.push({
              id: item.key,
              ...item.val()
            });
          }
        })

        this.setState({
          subjects: subjects,
          currentSubject: subjects[0].subjectName
        })
      })
    }
    else {
      this.props.history.push('/resources');
    }
  }


  getSubject = (subject) =>{
    this.setState({
      currentSubject: subject.subjectName
    });
  }

  render(){
    return(
      <div className = "Notes">
        <NotesNavbar getSubject = {this.getSubject} branch={this.state.branch} year={this.state.year} semester={this.state.semester} subjects={this.state.subjects} />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Typography variant="h4" style={{marginBottom: 20, marginTop: 30}}>
              {this.state.currentSubject}
            </Typography>
          </Container>
        </React.Fragment>
        <Tabs currentSubject = {this.state.currentSubject} />
      </div>
    )
  }
}

export default Notes;
