import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ViewsIcon from '@material-ui/icons/Visibility';
import DownlaodIcon from '@material-ui/icons/GetApp';

import NoDataFoundImage from '../images/no_data_found.svg';

class PapersCard extends Component{
  state = {
    papers: [],
    receivedPapers: [],
  }

  render(){
    const {currentSubject, semester, papers} = this.props; 

    return (
      <Grid container spacing = {2}>
        {
          (papers.length > 0) ? (
            papers.map(paper =>{
              if(paper.subjectId == currentSubject._id && paper.semType == semester)
                return(
                  <Grid item xs={12} sm={6} lg={4} key={paper._id}>
                    <Card style={{width: '100%'}}>
                      <CardContent>
                        <Button size="small" style={{float: 'right'}} variant="contained" color="secondary" disableElevation>
                          Typed
                        </Button>
                        <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                          {(paper.semType == 'midsem') ? 'Midsem' : 'Endsem'} - {paper.paperYear}
                        </Typography>
                        <Typography>
                          By: Saurabh Panchal
                        </Typography>
                        <Typography>
                          Uploaded on: 25 Jan, 2020
                        </Typography>
                      </CardContent>
                      <CardActions style={{display: 'block'}}>
                        <div style={{width: '100%'}}>
                          <Button style={{}}>
                            <Link to = {paper.link} color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download paper</Link>
                          </Button>
                        </div>
                        <div style={{paddingRight: 10, textAlign: 'right'}}>
                          <IconButton>
                            <ViewsIcon />
                          </IconButton>  {paper.views}
                          <IconButton style={{marginLeft: 20}}>
                            <DownlaodIcon />
                          </IconButton>  {paper.downloads}
                        </div>
                      </CardActions>
                    </Card>
                  </Grid>
                )
            })
          ) : (
            <img src = {NoDataFoundImage} alt = "" style = {{maxWidth: 200, maxHeight: 200, position: 'absolute', left: '50%', transform: 'translate(-50%, 50%)'}}/>
          )
        }
      </Grid>
    )
  }
}
export default PapersCard;
