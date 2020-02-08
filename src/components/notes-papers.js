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

class NotesCard extends Component{
  state = {
    notes: [],
    receivedNotes: [
      {
        id: 1,
        notesBy : "Saurabh Panchal",
        notesType: "PPT",
        downloads : 1,
        degreeType : "B.Tech.",
        views : 120,
        collegeId : "1",
        subjectId  : "1",
        semester : 3,
        branch : "Computer Engineering",
        year : 6,
        notesYear: 2019,
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
      {
        id: 2,
        notesBy : "Punit Singh",
        notesType: "Typed",
        downloads : 14,
        degreeType : "B.Tech.",
        views : 12,
        collegeId : "1",
        subjectId  : "1",
        semester : 3,
        branch : "Computer Engineering",
        year : 6,
        notesYear: 2020,
        link : "https://web.cn.edu/kwheeler/documents/Letter_Birmingham_Jail.pdf"
      },
    ]
  }

  render(){
    const {currentSubject} = this.props;

    return (
      <Grid container spacing = {2}>
        {
          this.state.receivedNotes.map(note =>{
            if(note.subjectId == currentSubject.id)
              return(
                <Grid item xs={12} sm={6} lg={4} key={note.id}>
                  <Card style={{width: '100%'}}>
                    <CardContent>
                      <Button size="small" style={{float: 'right'}} variant="contained" color="primary" disableElevation>
                        {note.notesType}
                      </Button>
                      <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                        {currentSubject.subjectName}
                      </Typography>
                      <Typography>
                        By: {note.notesBy}
                      </Typography>
                      <Typography>
                        Uploaded on: {note.notesYear}
                      </Typography>
                    </CardContent>
                    <CardActions style={{display: 'block'}}>
                      <div style={{width: '100%'}}>
                        <Button style={{}}>
                          <Link to = {note.link} color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download paper</Link>
                        </Button>
                      </div>
                      <div style={{paddingRight: 10, textAlign: 'right'}}>
                        <IconButton>
                          <ViewsIcon />
                        </IconButton>  {note.views}
                        <IconButton style={{marginLeft: 20}}>
                          <DownlaodIcon />
                        </IconButton>  {note.downloads}
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
export default NotesCard;
