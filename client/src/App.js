import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import ResourcesPage from './components/resources';
import Notes from './components/notes';
import Contact from './components/contact';
import About from './components/about';
import Faq from './components/faq';
import SearchCollege from './components/search-college';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component{
  state = {
    collegeName: '',
    branch: '',
    year: '',
    semester: ''
  };

  render(){
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#1976d2'
        },
        secondary: {
          main: '#f50057'
        }
      },
    });

    return(
      <MuiThemeProvider theme={theme}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/resources' component={ResourcesPage} />
        <Route path='/notes' component={Notes} />
        <Route path='/faq' component={Faq} />
        <Route path='/search-college' component={SearchCollege} />
      </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
