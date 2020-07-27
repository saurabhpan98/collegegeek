import React, {Component} from 'react';
import AboutComponent from './about-component';
import Navbar from './navbar';

class About extends Component{
  componentDidMount(){
    document.title = "CollegeGeek / About";
  }
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
