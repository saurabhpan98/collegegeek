import React, {Component} from 'react';
import Navbar from './navbar';
import AboutComponent from './about-component';
import Footer from './footer';
import HomeAboutComponent from './home-about';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import BackgroundImage from '../images/bg.png';


class Home extends Component{
  componentDidMount(){
    document.title = "CollegeGeek";
  }

  searchCollegeArea = () =>{
    this.props.history.push('/search-college');
  }

  render(){
    return(
      <div className = "Home">
        <Navbar />
        <Box id="home-top" style={{textAlign: 'center', padding: '0 10px', paddingTop: 90,}}>
          <Typography variant="h3" style={{marginTop: 40,}}>
            CollegeGeek
          </Typography>
          <Typography variant="body1" style={{marginBottom: 20, marginTop: 10, fontSize: '1.3em'}}>
            The best documents shared by your fellow students, organized in one place.
          </Typography>
          <Paper id="college-search-form" style={{borderRadius: 10}}>
            <InputBase
              placeholder="Search college"
              inputProps={{ 'aria-label': 'search college' }}
              id = "search-college-input"
              onFocus = {this.searchCollegeArea}
              style={{width: '100%', paddingLeft: 20}}
            />
            <IconButton style={{marginRight: '0', marginLeft: 'auto'}} type="submit" aria-label="search" onClick={this.searchCollegeArea}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <HomeAboutComponent />
        <Footer />
      </div>
    )
  }
}

export default Home;
