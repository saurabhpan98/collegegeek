import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';

import BooksImage from '../images/Books.svg';
import PapersImage from '../images/Question Papers.svg';
import NotesImage from '../images/Notes.svg';
import YoutubeImage from '../images/Youtube.svg';
import ProjectsImage from '../images/Projects.svg';
import AssignmentsImage from '../images/Assignments.svg';

import AboutComponent from './about-component'

const HomeAboutComponent = () =>{
  return(
    <React.Fragment>
      <AboutComponent />
    </React.Fragment>
  )
}

export default HomeAboutComponent;
