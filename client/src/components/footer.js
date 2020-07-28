import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () =>{
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{background: 'black', color: 'white', paddingTop: 30, paddingBottom: 30}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm = {4} lg = {4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6995.95759904685!2d77.11126152526765!3d28.750049929486046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0127947c9d65%3A0x12ce9ec01b812d4e!2sDelhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1580226982543!5m2!1sen!2sin" style={{height: '100%', width: '100%'}} frameBorder="0" allowFullScreen=""></iframe>
          </Grid>
          <Grid item xs={12} sm = {4} lg = {4}>
            <Typography variant="h4">
              Contact Us
            </Typography>
            <Typography variant="body1" style={{marginTop: 20, fontSize: '1.1rem'}}>
              Email: collegegeekin@gmail.com <br />
              Phone: 1234533 <br />
              Address: DTU, India
            </Typography>
            <Box className = "links-container" style={{marginTop: 20}}>
              <Link to = "/about" style={{color: 'white'}}>About Us</Link>
              <Link to = "/resources" style={{color: 'white', marginLeft: 10}}>Resources</Link>
              <Link to = "/faq" style={{color: 'white', marginLeft: 10}}>FAQ</Link>
            </Box>
            <Box style={{marginTop: 20}}>
              <Link to="/linkedin" style={{color: 'white'}}>
                <LinkedInIcon style={{fontSize: '2.5rem', marginRight: 20}} />
              </Link>
              <Link to="twitter.com" style={{color: 'white'}}>
                <TwitterIcon style={{fontSize: '2.5rem', marginRight: 20}} />
              </Link>
              <Link to="/instagram" style={{color: 'white'}}>
                <InstagramIcon style={{fontSize: '2.5rem', marginRight: 20}} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm = {4} lg = {4}>
            
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
