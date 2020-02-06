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
import SaurabhImage from '../images/Saurabh image.png';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const AboutComponent = () =>{
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingBottom: 80}}>
        <Typography variant="h3" style={{marginBottom: 20, marginTop: 40, textAlign: 'center'}}>
          You're in good company
        </Typography>
        <Typography variant="body1" style={{marginTop: 20, textAlign: 'center', fontSize: '1.3em', maxWidth: 600, margin: '0 auto', marginBottom: 40}}>
        Hundreds of thousands of students from around the world are already using CollegeGeek
          to share their documents and improve their grades. Be the one of them.
        </Typography>
        <Grid container spacing = {2}>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {BooksImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Books
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {PapersImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Papers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {NotesImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Notes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing = {2}>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {YoutubeImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Youtube Playlists
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {ProjectsImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} style={{textAlign: 'center'}}>
            <img src = {AssignmentsImage} height="70%" width="70%" alt="" />
            <Typography variant="h5" style={{marginTop: 20}}>
              Assignments
            </Typography>
          </Grid>
        </Grid>      

        <Typography gutterBottom variant="h3" component="h2" style={{textAlign: 'center', marginTop: 150, marginBottom: 50}}>
          Our Developers
        </Typography>
        <Grid container spacing = {2}>
          <Grid item xs={12} sm={6} lg={6}>
            <Card style={{height: '100%', maxWidth: 400, paddingBottom: 20, margin: '0 auto'}}>
              <CardActionArea>
                <img src = {SaurabhImage} alt="Saurabh Image" height="100%" width="100%" style={{padding: 30}} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
                    Saurabh Panchal
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2" style={{textAlign: 'center'}}>
                    Frontend, co-founder
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginTop: 20}}>
                    Hi, I'm a 3rd year CSE, Engg. student, and has a
                      vast experience in Web D. I also have an experience
                      in management and worked as Campus Ambassador with brands
                      like Coding Ninjas. I'm coder by passion and profession.
                      I'm also well versed with Node.js, Python, C++, MongoDB, etc.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="primary" aria-label="add">
                  <LinkedInIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="add">
                  <TwitterIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="add">
                  <InstagramIcon />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <Card style={{height: '100%', maxWidth: 400, paddingBottom: 20, margin: '0 auto'}}>
              <CardActionArea>
                <img src = {SaurabhImage} alt="Saurabh Image" height="100%" width="100%" style={{padding: 30}} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
                    Saurabh Panchal
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2" style={{textAlign: 'center'}}>
                    Frontend, co-founder
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginTop: 20}}>
                    Hi, I'm a 3rd year CSE, Engg. student, and has a
                      vast experience in Web D. I also have an experience
                      in management and worked as Campus Ambassador with brands
                      like Coding Ninjas. I'm coder by passion and profession.
                      I'm also well versed with Node.js, Python, C++, MongoDB, etc.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="primary" aria-label="add">
                  <LinkedInIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="add">
                  <TwitterIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="add">
                  <InstagramIcon />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default AboutComponent;
