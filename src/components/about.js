import React, {Component} from 'react';
import AboutComponent from './about-component';
import Navbar from './navbar';

class About extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <AboutComponent />
      </div>
    );
  }
}

export default About;
