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

import NoDataFoundImage from '../images/no_data_found.svg';

class NotesCard extends Component{
  state = {
    notes: []
  }

  render(){
    const {currentSubject, semester, notes} = this.props;

    return (
      <Grid container spacing = {2}>
        {
          (notes.length > 0) ? (
            notes.map(note =>{
              if(note.subjectId == currentSubject._id)
                return(
                  <Grid item xs={12} sm={6} lg={4} key={note._id}>
                    <Card style={{width: '100%'}}>
                      <CardContent>
                        <Button size="small" bg="secondary" style={{float: 'right'}} variant="contained" color="secondary" disableElevation>
                          {note.notesType}
                        </Button>
                        <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                          {currentSubject.subjectName}
                        </Typography>
                        <Typography>
                          By: {note.notesBy}
                        </Typography>
                        <Typography>
                          Notes year: {note.notesYear}
                        </Typography>
                        <Typography>
                          Uploaded on: 25 July, 2020
                        </Typography>
                      </CardContent>
                      <CardActions style={{display: 'block'}}>
                        <div style={{width: '100%'}}>
                          <Button>
                            <Link to = {note.link} color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download notes</Link>
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
          ) : (
            <img src = {NoDataFoundImage} alt = "" style = {{maxWidth: 200, maxHeight: 200, position: 'absolute', left: '50%', transform: 'translate(-50%, 50%)'}}/>
          )
        }
      </Grid>
    )
  }
}
export default NotesCard;
