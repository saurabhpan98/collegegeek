import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import AboutUsImage from '../images/about us.svg';
import BooksImage from '../images/Books.svg';
import PapersImage from '../images/Question Papers.svg';
import NotesImage from '../images/Notes.svg';
import YoutubeImage from '../images/Youtube.svg';
import ProjectsImage from '../images/Projects.svg';
import AssignmentsImage from '../images/Assignments.svg';

const AboutComponent = () =>{
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth = "lg" style={{height: '90vh', paddingTop: 50}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={6}>
            <Typography variant="h2">
              About Us
            </Typography>
            <Typography variant="body1" style={{maxWidth: 500, marginTop: 20, marginBottom: 30, fontSize: '1.3em'}}>
              We're the team of coders working hard to connect colleges and 
              gather resources as much as we can with the help of engineering students. 
            </Typography>
            <Link to = "/resources" style={{textDecoration: 'none'}}>
              <Button variant="outlined" color="secondary">
                Explore now
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <img src = {AboutUsImage} height="90%" width="90%" alt="" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" style={{paddingBottom: 80}}>
        <Typography variant="h3" style={{marginBottom: 20, marginTop: 40, textAlign: 'center'}}>
          You're in good company
        </Typography>
        <Typography variant="body1" style={{marginTop: 20, textAlign: 'center', fontSize: '1.3em', maxWidth: 600, margin: '0 auto', marginBottom: 40}}>
        Hundreds of thousands of students from around the world are already using CollegeGeek
          to share their documents and improve their grades. Be the one of them.
        </Typography>
        <Grid container spacing = {2}>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {BooksImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Books
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {PapersImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Papers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {NotesImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Notes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing = {2}>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {YoutubeImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Youtube Playlists
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {ProjectsImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center', marginBottom: 50}}>
            <img src = {AssignmentsImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Assignments
            </Typography>
          </Grid>
        </Grid>      
      </Container>
    </React.Fragment>
  )
}

export default AboutComponent;
