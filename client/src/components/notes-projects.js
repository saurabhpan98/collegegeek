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

class ProjectsCard extends Component{
  state = {
    projects: []
  }

  render(){
    const {currentSubject, semester, projects} = this.props;

    return (
      <Grid container spacing = {2}>
        {
          (projects.length > 0) ? (
            projects.map(project =>{
              if(project.subjectId == currentSubject._id)
                return(
                  <Grid item xs={12} sm={6} lg={4} key={project._id}>
                    <Card style={{width: '100%'}}>
                      <CardContent>
                        <Button size="small" bg="secondary" style={{float: 'right'}} variant="contained" color="secondary" disableElevation>
                          {project.projectType}
                        </Button>
                        <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                          {project.projectTopic}
                        </Typography>
                        <Typography>
                          By: {project.projectBy}
                        </Typography>
                        <Typography>
                          Uploaded on: {project.uploadedOn}
                        </Typography>
                        <Typography>
                          Uploaded by: {project.uploadedBy}
                        </Typography>
                      </CardContent>
                      <CardActions style={{display: 'block'}}>
                        <div style={{width: '100%'}}>
                          <Button>
                            <Link to = {project.link} color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download project</Link>
                          </Button>
                        </div>
                        <div style={{paddingRight: 10, textAlign: 'right'}}>
                          <IconButton>
                            <ViewsIcon />
                          </IconButton>  {project.views}
                          <IconButton style={{marginLeft: 20}}>
                            <DownlaodIcon />
                          </IconButton>  {project.downloads}
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
export default ProjectsCard;
