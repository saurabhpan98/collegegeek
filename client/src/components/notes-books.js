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

class BooksCard extends Component{
  state = {
    books: []
  }

  render(){
    const {currentSubject, semester, books} = this.props;

    return (
      <Grid container spacing = {2}>
        {
          (books.length > 0) ? (
            books.map(book =>{
              if(book.subjectId == currentSubject._id)
                return(
                  <Grid item xs={12} sm={6} lg={4} key={book._id}>
                    <Card style={{width: '100%'}}>
                      <CardContent>
                        <Button size="small" style={{float: 'right'}} variant="contained" color="secondary" disableElevation>
                          Rs {book.bookPrice}
                        </Button>
                        <Typography variant="h5" style={{marginBottom: 12}} component="h2">
                          {book.bookName}
                        </Typography>
                        <Typography>
                          Book by: {book.bookBy}
                        </Typography>
                        <Typography>
                          Uploaded on: {book.uploadedOn}
                        </Typography>
                        <Typography>
                          Uploaded by: {book.uploadedBy}
                        </Typography>
                      </CardContent>
                      <CardActions style={{display: 'block'}}>
                        <div style={{width: '100%'}}>
                          <Button>
                            <Link to = {book.link} color="primary" style={{textDecoration: 'none', color: '#3f51b5'}}>Download book</Link>
                          </Button>
                        </div>
                        <div style={{paddingRight: 10, textAlign: 'right'}}>
                          <IconButton>
                            <ViewsIcon />
                          </IconButton>  {book.views}
                          <IconButton style={{marginLeft: 20}}>
                            <DownlaodIcon />
                          </IconButton>  {book.downloads}
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
export default BooksCard;
