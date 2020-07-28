import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import ResourcesIcon from '@material-ui/icons/MenuBook';
import ContactIcon from '@material-ui/icons/PermPhoneMsg';
import LoginIcon from '@material-ui/icons/VpnKey';
import SignupIcon from '@material-ui/icons/LockOpen';
import AboutIcon from '@material-ui/icons/AssignmentInd';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
}));

const NotesNavbar = (props) =>{
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const replaceSubject = (e) =>{
    const newSubject = {              //new clicked subject
      id: "",
      subjectName: e.target.textContent
    };
    setOpen(false);
    props.getSubject(newSubject);
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h4" style={{marginBottom: 20,}}>
            {props.branch}
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
            <Button size="small" style={{margin: '0 5px'}} variant="contained" color="primary" disableElevation>
              Year - {props.year}
            </Button>
            <Button size="small" style={{margin: '0 5px'}} variant="contained" color="primary" disableElevation>
              Sem - {props.semester}
            </Button>
          </Box>
        </ListItem>
        {
          (props.subjects.length != 0) ? (
            props.subjects.map(subject =>{
              return(
                <ListItem button onClick={replaceSubject} key={subject._id}>
                  <ListItemIcon><ResourcesIcon /></ListItemIcon>
                  <ListItemText primary={subject.subjectName} />
                </ListItem>
              )
            })
          ) : null
        }
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon><ResourcesIcon /></ListItemIcon>
          <ListItemText primary={'Select Elective'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/" className="nav-links" key={'Home'}>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        <Link to="/resources" className="nav-links" key={'Resources'}>
          <ListItem button>
            <ListItemIcon><ResourcesIcon /></ListItemIcon>
            <ListItemText primary={'Resources'} />
          </ListItem>
        </Link>
        <Link to="/about" className="nav-links" key={'About'}>
          <ListItem button>
            <ListItemIcon><AboutIcon /></ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'About', 'Contact', 'Resources'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const searchElective = (e) =>{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-elective');
    filter = input.value.toUpperCase();

    ul = document.getElementsByClassName("elective-list")[0];
    li = ul.getElementsByClassName('elective-list-item');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[1];
      a = a.getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            <Link to = "/" style={{color: 'white', textDecoration: 'none'}}>CollegeGeek</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Select elective</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To select the elective subject, search using searchbar and then selec the 
            needed subject.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="search-elective"
            label="Select elective"
            type="text"
            fullWidth
            onKeyUp = {searchElective}
          />
          <List className = "elective-list">
          {
            (props.electives.length) ? (
              props.electives.map(elective =>{
                return(
                  <ListItem button className = "elective-list-item" onClick={replaceSubject} key = {elective._id} >
                    <ListItemIcon>
                      <SubjectRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary={elective.subjectName} />
                  </ListItem>
                )
              })
            ) : null
          }
        </List>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NotesNavbar;
