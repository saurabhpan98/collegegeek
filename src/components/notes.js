import React, {Component} from 'react';
import Tabs from './tabs';
import NotesNavbar from './notes-navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
//import * as firebase from 'firebase';

class Notes extends Component{
  state = {
    collegeId: '',
    collegeName: '',
    branch: '',
    year: '',
    semester: '',
    subjects: [],
    fetchedSubjects: [
      {
        id: 1,
        collegeId : 1,
        subjectName : "Compiler Design",
        subjectCode : "CO-302",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 6
      },
      {
        id: 2,
        collegeId : 1,
        subjectName : "Artificial Intelligence",
        subjectCode : "CO-304",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 6
      },
      {
        id: 3,
        collegeId : 1,
        subjectName : "Computer Networks",
        subjectCode : "CO-306",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 6
      },
      {
        id: 4,
        collegeId : 1,
        subjectName : "Technical Communications",
        subjectCode : "HU-302",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 6
      },
      {
        id: 5,
        collegeId : 1,
        subjectName : "Software Engineering",
        subjectCode : "CO-301",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 5
      },
      {
        id: 6,
        collegeId : 1,
        subjectName : "Theory of Computation",
        subjectCode : "CO-303",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 5
      },
      {
        id: 7,
        collegeId : 1,
        subjectName : "Professional Ethics & Human Values",
        subjectCode : "CO-303",
        degreeType : "B.Tech",
        branch : "Computer Engineering",
        year : 3,
        semester : 5
      },
    ],
    currentSubject: ''
  };

  componentDidMount() {
    const formDetails = JSON.parse(localStorage.getItem('formDetails'));

    if (localStorage.getItem('formDetails')) {
      const gotId = formDetails.collegeId;
      const gotName = formDetails.collegeName;
      const gotBranch = formDetails.branch;
      const gotYear = formDetails.year;
      const gotSemester = formDetails.semester;

      this.setState({
        collegeId: gotId,
        collegeName: gotName,
        branch: gotBranch,
        year: gotYear,
        semester: gotSemester
      });

      //retrieving data from firebase
      /*var ref = firebase.database().ref("subjects");
      ref.on("value", function(snapshot) {
        let subArr = [];
        let subjects = snapshot.val();
        let keys = Object.keys(subjects);
        for(let i = 0; i < keys.length; i++){
          let k = keys[i];
          if(subjects[k].semester == gotSemester && subjects[k].year == gotYear && subjects[k].branch == gotBranch){
            subArr.push(subjects[k]);
          }
        }

        this.setState({
          fetchedSubjects: subArr
        })
      }, function (error) {
        console.log("Error: " + error.code);
      });*/

      var subjects = [];
      this.state.fetchedSubjects.forEach(subject =>{
        if(subject.branch == gotBranch && subject.year == gotYear && subject.semester == gotSemester)
          subjects.push(subject);
      })
      if(subjects.length){
        this.setState({
          subjects: subjects,
          currentSubject: subjects[0]
        })
      }
    }
    else {
      this.props.history.push('/resources');
    }
  }


  getSubject = (clickedSubject) =>{
    this.state.subjects.forEach(subject =>{
      if(subject.subjectName == clickedSubject.subjectName)
        this.setState({
          currentSubject: subject,
        });
    })
  }

  render(){
    return(
      <div className = "Notes">
        <NotesNavbar getSubject = {this.getSubject} branch={this.state.branch} year={this.state.year} semester={this.state.semester} subjects={this.state.subjects} />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Typography variant="h4" style={{marginBottom: 20, marginTop: 30}}>
              {this.state.currentSubject.subjectName}
            </Typography>
          </Container>
        </React.Fragment>
        <Tabs currentSubject = {this.state.currentSubject} />
      </div>
    )
  }
}

export default Notes;
