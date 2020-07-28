import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


import ContactImage from '../images/Contact.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const SendQuery = (props) =>{
  const classes = useStyles();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const Data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    props.getQueryData(Data);
    e.target.email.value = null;
    e.target.subject.value = null;
    e.target.message.value = null;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h2" style={{textAlign: 'center', marginTop: 50}}>
          Contact Us
        </Typography>
        <Typography variant="body1" style={{textAlign: 'center', margin: '0 auto', marginTop: 10, maxWidth: 500, fontSize: '1.3em'}}>
          Have any doubts? Feel free to contact us by just filling up these 
          details below. We will get in touch soon
        </Typography>
        <Grid container spacing={3} id="contact-form-grid">
          <Grid item xs={12} sm={12} lg={6}>
              <img className="contactImage" alt="" src = {ContactImage} style={{height: '70%', width: '70%', marginTop: 40}}/>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} style={{textAlign: 'center'}}>
            <form className = "query-form" style={{padding: '20px 10px 40px 10px', maxWidth: 400, margin: '0 auto'}} onSubmit = {handleSubmit}>
                <Box component="div" style={{display: 'flex', flexDirection: 'column', maxWidth: 500, margin: '0 auto'}}>
                  <TextField 
                    id="email" 
                    name="email" 
                    style={{marginTop: 15}} 
                    label="Email" 
                    variant = "outlined"
                    helperText="We will not share your email with anyone" 
                    required
                  />
                  <TextField id="subject" name="subject" style={{marginTop: 15}} label="Subject" variant = "outlined" required/>
                  <TextField
                    id="outlined-textarea"
                    label="Your query"
                    placeholder="Your query"
                    multiline
                    style={{marginTop: 15}}
                    name = "message"
                    variant = "outlined"
                    required
                  />
                </Box>
                <Button type="submit" style={{marginTop: 30}} variant="contained" color="primary">
                  Send message
                </Button>
              </form>        
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default SendQuery;
