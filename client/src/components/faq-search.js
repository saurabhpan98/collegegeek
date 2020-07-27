import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Faq1 from '../images/faq1.svg';
import Faq2 from '../images/faq2.svg'; 

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 4px',
    paddingRight: 7,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 600,
    margin: '10px auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const FaqSearch = (props) =>{
  const classes = useStyles();
  const [openSnackbar, setSnackbar] = React.useState(false);
  const [openDialog, setDialog] = React.useState(false);

  const openDialogBox = () => {
    setDialog(true);
    setSnackbar(false);
  };

  const closeDialogBox = () => {
    setDialog(false);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSnackbar(true);
  }

  return (
    <div>
    <Box style={{textAlign: 'center', padding: '0 10px', paddingTop: 90}}>
      <Typography variant="h4" style={{marginBottom: 20, marginTop: 40,}}>
        How can we help you?
      </Typography>

      <div class="faq-search-div">
        <Paper className={classes.root} component="form" onSubmit = {handleSubmit} style={{borderRadius: 10}}>
            <InputBase
              className={classes.input}
              placeholder="Ask a question"
              inputProps={{ 'aria-label': 'ask a question' }}
              id = "search-question-input"
            />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
          </Paper>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message="Question not found"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={openDialogBox}>
              SEND US?
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      <Dialog open={openDialog} onClose={closeDialogBox} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send your question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Note: Answer to your question may take 24 hours and will be
            sent on your email.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Your name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="question"
            label="Your question"
            type="text"
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogBox} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    <Box style={{maxWidth: 700, padding: '0 10px', margin: '0 auto', marginBottom: 200, marginTop: 200}}>
      <Typography variant="h4" style={{textAlign: 'center'}}>
        Frequently asked
      </Typography>
      <p style={{fontSize: '1.2rem', marginBottom: 40, textAlign: 'center'}}>
        These are some of the most asked questions by our users
      </p>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is CollegeGeek?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
          <Typography>
            CollegeGeek is a student friendly site where Engineering students can find 
            their college related resources like - Question Papers, handwritten as well 
            as printed notes, Youtube playlist and many more. 
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', marginRight: 0, marginLeft: 'auto'}}>
            <Tooltip title="Useful" placement="top">
              <IconButton aria-label="Useful" color="primary" component="span">
                <ThumbUpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Useless" placement="top">
              <IconButton aria-label="Useless" color="primary" component="span">
                <ThumbDownIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How to use CollegeGeek?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
          <Typography>
            Head over to <Link to = "/resources" style={{textDecoration: 'none', color: 'blue'}}>Resources</Link>, select your college, semester, year and branch
            and get the resources in the proper format. 
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', marginRight: 0, marginLeft: 'auto'}}>
            <Tooltip title="Useful" placement="top">
              <IconButton aria-label="Useful" color="primary" component="span">
                <ThumbUpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Useless" placement="top">
              <IconButton aria-label="Useless" color="primary" component="span">
                <ThumbDownIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>My collge not present</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
          <Typography>
            In case your college is not found, then the reason could be that either 
            your college has not provided resources or we missed that. To add your 
            college with CollegeGeek, just send message to CollegeGeek.
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', marginRight: 0, marginLeft: 'auto'}}>
            <Tooltip title="Useful" placement="top">
              <IconButton aria-label="Useful" color="primary" component="span">
                <ThumbUpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Useless" placement="top">
              <IconButton aria-label="Useless" color="primary" component="span">
                <ThumbDownIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>How to work at CollegeGeek?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
          <Typography>
            We regularly open positions, so keep in touch with our careers page. 
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', marginRight: 0, marginLeft: 'auto'}}>
            <Tooltip title="Useful" placement="top">
              <IconButton aria-label="Useful" color="primary" component="span">
                <ThumbUpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Useless" placement="top">
              <IconButton aria-label="Useless" color="primary" component="span">
                <ThumbDownIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
    </div>
  );
}

export default FaqSearch;
