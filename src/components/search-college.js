import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class SearchCollege extends Component{
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
        branchOne : ["Computer Engineering","Information Technology","Civil Engineering","Mechanical Engineering"]
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
    open: false,
  };

  componentDidMount() {
    localStorage.clear();
  }

  closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false,
    });
  };

  placeCollege = (e) =>{
    var input = document.getElementById('search-college-input');
    input.value = e.target.textContent;
    document.getElementById("college-list-paper").style.display = "none";
  }

  searchCollege = (e) =>{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-college-input');
    filter = input.value.toUpperCase();

    if(filter.length != 0){
      document.getElementById("college-list-paper").style.display = "block";
    }
    else{
      document.getElementById("college-list-paper").style.display = "none";
    }

    ul = document.getElementsByClassName("college-list")[0];
    li = ul.getElementsByClassName('nav-links');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      a = a.getElementsByTagName("div")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    var input = document.getElementById('search-college-input');
    input = input.value;

    var isPresent = false;
    var currentCollege, colleges = this.state.colleges;
    for(var i = 0; i<colleges.length; i++){
      if(colleges[i].collegeName == input){
        isPresent = true;
        currentCollege = colleges[i];
        break;
      }
    }
    if(!isPresent){
      this.setState({
        open: true,
      });
      document.getElementById("college-list-paper").style.display = "none";
    }
    else{
      const formDetails = {
        collegeId: currentCollege.id,
        collegeName: currentCollege.collegeName,
        branch: '',
        year: '',
        semester: ''
      };

      localStorage.setItem('formDetails',JSON.stringify(formDetails));

      this.props.history.push('/resources');
    }
  }

  goBack = () =>{
    this.props.history.push('/home');
  }

  render(){
    return(
      <div className="SearchCollege">
        <React.Fragment>
          <CssBaseline />
            <Container maxWidth="lg" style={{display: 'flex', flexDirection: 'row', paddingTop: 10, width: '100%'}}>
              <Fab size="small" style={{background: 'white', boxShadow: 'none', marginTop: 5}} aria-label="go_back" onClick={this.goBack}>
                <ArrowBackIcon />
              </Fab>
              <Box style={{textAlign: 'center', padding: '0 10px', width: '100%'}}>
                <Paper className="college-search" component="form" onSubmit = {this.handleSubmit}>
                  <InputBase
                    autoFocus
                    placeholder="Search college"
                    inputProps={{ 'aria-label': 'search college' }}
                    onKeyUp = {this.searchCollege}
                    id = "search-college-input"
                    style={{width: '100%', paddingLeft: 10,}}
                  />
                  <IconButton style={{marginRight: '0', marginLeft: 'auto'}} type="submit" aria-label="search" onClick={this.handleSubmit}>
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <Paper style={{margin: '1px auto', maxWidth: 600, display: 'none'}} id = "college-list-paper">
                  <List className = "college-list">
                    {
                      this.state.colleges.map(currentCollege => {
                        return(
                          <Link to="#" className="nav-links" key={currentCollege.id} onClick = {this.placeCollege}>
                            <ListItem button>
                              <SearchIcon style={{marginRight: 5}} />
                              <ListItemText primary={currentCollege.collegeName} />
                            </ListItem>
                          </Link>
                        )
                      })
                    }
                  </List>
                </Paper>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  open={this.state.open}
                  autoHideDuration={6000}
                  onClose={this.closeSnackbar}
                  message="College not found"
                  action={
                    <React.Fragment>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                />
              </Box>
            </Container>
        </React.Fragment>
      </div>
    )
  }
}

export default SearchCollege;
