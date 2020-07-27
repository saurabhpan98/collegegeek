import React, {Component} from 'react';
import Tabs from './tabs';
import NotesNavbar from './notes-navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

class Notes extends Component{
  state = {
    collegeId: '',
    collegeName: '',
    branch: '',
    year: '',
    semester: '',
    subjects: [],
    electives: [],
    papers: [],
    notes: [],
    books: [],
    youtubes: [],
    projects: [],
    assignments: [],
    currentSubject: ''
  };

  componentDidMount() {
    document.title = "CollegeGeek / Resources";
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

      //retrieving data from server
      let object = {
        collegeId: gotId,
        branch: gotBranch,
        year: gotYear,
        semester: gotSemester   
      };
      axios.post('http://localhost:5000/get-subjects', object)
        .then(res =>{
          this.setState({
            subjects: res.data.subjects,
            currentSubject: res.data.subjects[0]
          })
        })
        .catch(err =>{
          console.log(err)
        })

      //getting elective subjects
      axios.post('http://localhost:5000/get-electives', object)
        .then(res =>{
          this.setState({
            electives: res.data.electives,
          })
        })
        .catch(err =>{
          console.log(err)
        })

      //getting all papers 
      axios.post('http://localhost:5000/get-papers', object)
        .then(res =>{
          this.setState({
            papers: res.data.papers
          });
        })
        .catch(err =>{
          console.log(err)
        })
      
      //getting all notes 
      axios.post('http://localhost:5000/get-notes', object)
        .then(res =>{
          this.setState({
            notes: res.data.notes
          });
        })
        .catch(err =>{
          console.log(err)
        })
      
      //getting all books 
      axios.post('http://localhost:5000/get-books', object)
        .then(res =>{
          this.setState({
            books: res.data.books
          });
        })
        .catch(err =>{
          console.log(err)
        })

      //getting all youtube videos 
      axios.post('http://localhost:5000/get-youtubes', object)
        .then(res =>{
          this.setState({
            youtubes: res.data.youtubes
          });
        })
        .catch(err =>{
          console.log(err)
        })
      
      //getting all projects 
      axios.post('http://localhost:5000/get-projects', object)
        .then(res =>{
          this.setState({
            projects: res.data.projects
          });
        })
        .catch(err =>{
          console.log(err)
        })
      
      //getting all assignmets 
      axios.post('http://localhost:5000/get-assignments', object)
        .then(res =>{
          this.setState({
            assignments: res.data.assignments
          });
        })
        .catch(err =>{
          console.log(err)
        })
    }
    else {
      this.props.history.push('/resources');
    }
  }


  getSubject = (clickedSubject) =>{
    let isSubjectFound = false; 
    this.state.subjects.forEach(subject =>{
      if(subject.subjectName == clickedSubject.subjectName){
        this.setState({
          currentSubject: subject
        });
        isSubjectFound = true;
      }    
    })

    //if clicked subject is not found in normal subjects, then check in electives
    if(isSubjectFound == false){
      this.state.electives.forEach(subject =>{
        if(subject.subjectName == clickedSubject.subjectName)
          this.setState({
            currentSubject: subject
          });
      })
    }
  }

  render(){
    return(
      <div className = "Notes">
        <NotesNavbar getSubject = {this.getSubject} branch={this.state.branch} year={this.state.year} semester={this.state.semester} subjects={this.state.subjects} electives = {this.state.electives}/>
        {
          (this.state.subjects.length) ? 
            (
              <div>
                <React.Fragment>
                  <CssBaseline />
                  <Container maxWidth="lg">
                    <Typography variant="h4" style={{marginBottom: 20, marginTop: 30}}>
                      {this.state.currentSubject.subjectName}
                    </Typography>
                  </Container>
                </React.Fragment>
                <Tabs currentSubject = {this.state.currentSubject} papers = {this.state.papers} notes = {this.state.notes} books = {this.state.books} youtubes = {this.state.youtubes} projects = {this.state.projects} assignments = {this.state.assignments}/> 
              </div>
            )
            : 
            (
              <CircularProgress style={{position: 'fixed', top: '50%', left: '50%'}} />
            )
        }
        
      </div>
    )
  }
}

export default Notes;
