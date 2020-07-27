import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import NoDataFoundImage from '../images/no_data_found.svg';

class YoutubeCard extends Component{
  state = {
    youtubes: []
  }

  render(){
    const {currentSubject, semester, youtubes} = this.props; 

    return (
      <Grid container spacing = {2}>
        {
          (youtubes.length > 0) ? (
            youtubes.map(youtube =>{
              if(youtube.subjectId == currentSubject._id)
                return(
                  <Grid item xs={12} sm={6} lg={4} key={youtube._id}>
                    <Card style={{width: '100%'}}>
                      <CardContent>
                        <img src = {`https://img.youtube.com/vi/${youtube.thumbId}/maxresdefault.jpg`} height = "100%" width = "100%" />
                        <Typography>
                          <strong>Faculty:</strong> {youtube.teacherName}
                        </Typography>
                        <Typography>
                          <strong>Playlist:</strong> {youtube.playlistName}
                        </Typography>
                        <Typography>
                          <strong>Uploaded By:</strong> {youtube.uploadedBy}
                        </Typography>
                        <a href = {youtube.link} target="_blank" style={{textDecoration: 'none', color: 'blue', display: 'block'}}>Check playlist</a>
                      </CardContent>
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
export default YoutubeCard;
