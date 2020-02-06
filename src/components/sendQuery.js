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
import FindUsImage from '../images/Find us.svg';

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
        <Grid container spacing={3} style={{marginTop: 50}}>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4">
                Contact Us
              </Typography>
              <form className = "query-form" style={{padding: '20px 10px 40px 10px'}} onSubmit = {handleSubmit}>
                <Box component="div" style={{display: 'flex', flexDirection: 'column', maxWidth: 500, margin: '0 auto'}}>
                  <TextField id="email" name="email" style={{marginTop: 15}} label="Email" variant="outlined" required/>
                  <TextField id="subject" name="subject" style={{marginTop: 15}} label="Subject" variant="outlined" required/>
                  <TextField
                    id="outlined-textarea"
                    label="Your query"
                    placeholder="Your query"
                    multiline
                    variant="outlined"
                    style={{marginTop: 15}}
                    name = "message"
                    required
                  />
                </Box>

                <Button type="submit" style={{marginTop: 20}} variant="contained" color="primary">
                  Send message
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} style={{textAlign: 'center'}}>
            <img className="contactImage" alt="" src = {ContactImage} style={{height: '70%', width: '70%', marginTop: 40}}/>
          </Grid>
        </Grid>

        <Grid container spacing = {3} style={{marginTop: 80, marginBottom: 70}}>
          <Grid item xs={12} sm={12} lg={6}>
            <img className="FindUsImage" alt="" src = {FindUsImage} style={{height: '70%', width: '70%', marginTop: 40}}/>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
          <Paper classes = {classes.paper} style={{padding: 20, paddingBottom: 80}}>
            <Typography variant="h4" style={{textAlign: 'center', marginTop: 10, marginBottom: 40}}>
              Find us here
            </Typography>
            <Grid container spacing = {2}>
              <Grid item xs={12} sm={12} lg={12}>
                <Paper className={classes.paper}>
                Phone : 8527514658
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Paper className={classes.paper}>
                Email : collegegeekin@gmail.com
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Paper className={classes.paper}>
                Address: DTU, Delhi
                </Paper>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default SendQuery;
