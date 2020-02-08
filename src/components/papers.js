import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ViewsIcon from '@material-ui/icons/Visibility';
import DownlaodIcon from '@material-ui/icons/GetApp';

class PapersCard extends Component{
  state = {
    papers: [],
    receivedPapers: [
      {
        id: 1,
        semType : "midsem",
        downloads : 50,
        degreeType : "B.Tech.",
        views : 100,
        collegeId : "1",
        subjectId  : "1",
        semester : "6",
        branch : "Computer Engineering",
        year : "3",
        paperYear: '2019',
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
      {
        id: 2,
        semType : "midsem",
        downloads : 63,
        degreeType : "B.Tech.",
        views : 32,
        collegeId : "1",
        subjectId  : "1",
        semester : "6",
        branch : "Computer Engineering",
        year : "3",
        paperYear: '2018',
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
      {
        id: 3,
        semType : "endsem",
        downloads : 122,
        degreeType : "B.Tech.",
        views : 10,
        collegeId : "1",
        subjectId  : "1",
        semester : "6",
        branch : "Computer Engineering",
        year : "3",
        paperYear: '2017',
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
      {
        id: 4,
        semType : "midsem",
        downloads : 11,
        degreeType : "B.Tech.",
        views : 122,
        collegeId : "1",
        subjectId  : "2",
        semester : "6",
        branch : "Computer Engineering",
        year : "3",
        paperYear: '2016',
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
      {
        id: 1,
        semType : "midsem",
        downloads : 23,
        degreeType : "B.Tech.",
        views : 52,
        collegeId : "1",
        subjectId  : "2",
        semester : "6",
        branch : "Computer Engineering",
        year : "3",
        paperYear: '2015',
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
    ],
  }

  render(){
    const {currentSubject, semester} = this.props;

    return (
      <Grid container spacing = {2}>
        {
          this.state.receivedPapers.map(paper =>{
            if(paper.subjectId == currentSubject.id && paper.semType == semester)
              return(
                <Grid item xs={12} sm={6} lg={4} key={paper.id}>
                  <Card style={{width: '100%'}}>
                    <CardContent>
                      <Button size="small" style={{float: 'right'}} variant="contained" color="primary" disableElevation>
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
        }
      </Grid>
    )
  }
}
export default PapersCard;
