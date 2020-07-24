import React, { Component } from 'react';
import Resources from './resources-form';
import Navbar from './navbar';
import '../config';
import * as firebase from 'firebase';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class ResourcesPage extends Component{
  state = {
    colleges: [
      {id: 1, collegeName: 'Delhi Technological University',
        collegeType: ["Engineering", "MBA", "B-Design"],
        degreeType : ["B.Tech.", "M.Tech.", "MBA", "B.Design"],
        subjectNum : 0,
        notesNum : 0,
        assignmentNum : 0,
        booksNum  : 0,
        projectNum : 0,
        youtubeNum : 0,
        years : [4,2,2,4],
        semester : [8,4,4,8],
        branchOne : ["Computer Engineering","Information Technology","Civil Engineering","Mechanical Engineering","Electronic & Communication Engineering", "Electrical Engineering", "Production & Industrial Engineering", "Environmental Engineering", "Polymer Science & Chemical Engineering", "Bio-Technology", "Software Engineering", "Electrical & Electronics Engineering"]
      },
      {id: 2, collegeName: 'Indira Gandhi Delhi Technological University for Women',
        collegeType: ["Engineering", "MCA"],
        degreeType : ["B.Tech.", "M.Tech.", "MCA"],
        subjectNum : 0,
        notesNum : 0,
        assignmentNum : 0,
        booksNum  : 0,
        projectNum : 0,
        youtubeNum : 0,
        years : [4,2,2],
        semester : [8,4,4],
        branchOne : ["Computer Science", "Information Technology", "Civil Engineering", "Mechanical Engineering"]
      }
    ],
    defaultCollege: '',
    branches: [],
    years: [],
    open: false,
  }

  componentDidMount() {
    //getting local storage
    const formDetails = JSON.parse(localStorage.getItem('formDetails'));

    if (localStorage.getItem('formDetails') && formDetails.branch != '') {
      localStorage.clear();
    }
    else if(localStorage.getItem('formDetails') && formDetails.branch == ''){
      console.log(formDetails)
      this.state.colleges.forEach(college =>{
        if(college.collegeName == formDetails.collegeName){

          var years = [];
          for(var i = 0; i<college.years[0]; i++)
            years.push(i+1);

          this.setState({
            defaultCollege: college.collegeName,
            branches: college.branchOne,
            years: years
          });
        }
      })
    }
    else{

    }
  }

  closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.collegeName.value === "" || e.target.branch.value === "" || e.target.year.value === "" || e.target.semester.value === ""){
      this.setState({
        open: true,
      });
    }
    else{
      var colleges = this.state.colleges;
      var currentCollege;
      for(var i = 0; i<colleges.length; i++){
        if(colleges[i].collegeName == e.target.collegeName.value){
          currentCollege = colleges[i];
          break;
        }
      }
      const formDetails = {
        collegeId: currentCollege.id,
        collegeName: e.target.collegeName.value,
        branch: e.target.branch.value,
        year: e.target.year.value,
        semester: e.target.semester.value
      };

      localStorage.setItem('formDetails',JSON.stringify(formDetails));

      this.props.history.push('/notes');
    }
  }

  getCollege = (selectedCollege) =>{
    if(selectedCollege.collegeName != ''){
      const colleges = this.state.colleges;
      var currentCollege;

      //searching for selected college in state array
      for(var i = 0; i<this.state.colleges.length; i++){
        if(colleges[i].collegeName == selectedCollege.collegeName){
          currentCollege = colleges[i];  //saving selected college in
          break;                         //new object
        }
      }

      var years = [];
      for(var i = 0; i<currentCollege.years[0]; i++)
        years.push(i+1);

      this.setState({
          branches: currentCollege.branchOne,
          years: years,
      });
    }
    else{
      this.setState({
        branches: [],
        years: [],
      })
    }
  }

  render(){
    return(
      <div className = "ResourcesPage">
        <Navbar />
        <form className = "resources-form" onSubmit = {this.handleSubmit}>
          <Resources colleges={this.state.colleges} defaultCollege={localStorage.getItem('formDetails') ? JSON.parse(localStorage.getItem('formDetails')).collegeName : ''} branches={this.state.branches} getCollege={this.getCollege} years={this.state.years} />
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.closeSnackbar}
          message="Fill all fields"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    )
  }
}

export default ResourcesPage;
