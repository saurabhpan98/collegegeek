import React, {Component} from 'react';
import Navbar from './navbar';
import FaqSearchBar from './faq-search';

class Faq extends Component{
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
