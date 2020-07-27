import React, {Component} from 'react';
import Navbar from './navbar';
import FaqSearchBar from './faq-search';

class Faq extends Component{
  componentDidMount(){
    document.title = "CollegeGeek / FAQ";
  }
  render(){
    return(
      <div className = "Faq">
        <Navbar />
        <FaqSearchBar />
      </div>
    )
  }
};

export default Faq;
