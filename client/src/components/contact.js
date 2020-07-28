import React, {Component} from 'react';
import SendQuery from './sendQuery';
import Navbar from './navbar';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Contact extends Component{
  state = {
    email: '',
    subject: '',
    message: '',
    open: false
  };

  componentDidMount(){
    document.title = "CollegeGeek / Contact";
  }

  closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false,
    });
  };

  getQueryData = (data) =>{
    this.setState({
      email: data.email,
      subject: data.subject,
      message: data.message
    });

    //open snackbar
    this.setState({
      open: true
    });
  }

  render(){
    return(
      <div className = "Contact">
        <Navbar />
        <SendQuery getQueryData = {this.getQueryData} />

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.closeSnackbar}
          message="Message sent"
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

export default Contact;
