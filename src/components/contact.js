import React, {Component} from 'react';
import SendQuery from './sendQuery';
import Navbar from './navbar';

class Contact extends Component{
  state = {
    email: '',
    subject: '',
    message: '',
  };

  getQueryData = (data) =>{
    this.setState({
      email: data.email,
      subject: data.subject,
      message: data.message
    });
  }

  render(){
    return(
      <div className = "Contact">
        <Navbar />
        <SendQuery getQueryData = {this.getQueryData} />
      </div>
    )
  }
}

export default Contact;
