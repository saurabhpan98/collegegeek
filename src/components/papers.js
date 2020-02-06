import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ViewsIcon from '@material-ui/icons/Visibility';

class PapersCard extends Component{
  state = {
    papers: [
      {id: 1, type: 'Typed', By: 'Saurabh', date: '25 Jan, 2020'},
      {id: 2, type: 'Typed', By: 'Punit', date: '25 Jan, 2020'},
      {id: 3, type: 'Handwritten', By: 'Raj', date: '25 Jan, 2020'},
      {id: 4, type: 'Handwritten', By: 'Saurabh', date: '25 Jan, 2020'},
      {id: 5, type: 'Typed', By: 'Rahul', date: '25 Jan, 2020'},
    ],
  }

  render(){
    return (
      <Grid container spacing = {2}>
        {
          this.state.papers.map(paper =>{
            return(
              <Grid item xs={12} sm={6} lg={4}>
                <Card style={{width: '100%'}}>
                  <CardContent>
                    <Button size="small" style={{float: 'right'}} variant="contained" color="primary" disableElevation>
                      {paper.type}
                    </Button>
                    <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                      Midsem - 2019
                    </Typography>
                    <Typography>
                      By: {paper.By}
                    </Typography>
                    <Typography>
                      Uploaded on: 25 Jan, 2020
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{marginBottom: 12}}>
                      <Link to = "/download-something" color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download paper</Link>
                    </Button>
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
