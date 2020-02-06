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
    colleges: [],
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
    }
    else{
      //do nothing
    }

    firebase.database().ref("colleges").once("value").then(snapShot =>{
      var colleges = [];
      snapShot.forEach(item =>{
        colleges.push({
          id: item.key,
          ...item.val()
        })
      })
      this.setState({
        colleges: colleges
      })
    })
    console.log(this.state.colleges)
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
      for(var i = 0; i<this.state.colleges.length; i++){
        if(colleges[i].collegeName == selectedCollege.collegeName){
          currentCollege = colleges[i];
          break;
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
