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

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const replaceSubject = (e) =>{
    //alert(e.target.textContent)
    const newSubject = {
      id: e.target.textContent,
      subjectName: e.target.textContent
    };
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
              {props.year} Year
            </Button>
            <Button size="small" style={{margin: '0 5px'}} variant="contained" color="primary" disableElevation>
              {props.semester} Sem
            </Button>
          </Box>
        </ListItem>
        {
          (props.subjects.length != 0) ? (
            props.subjects.map(subject =>{
              return(
                <ListItem button onClick={replaceSubject} key={subject.id}>
                  <ListItemIcon><ResourcesIcon /></ListItemIcon>
                  <ListItemText primary={subject.subjectName} />
                </ListItem>
              )
            })
          ) : null
        }
        <ListItem button>
          <ListItemIcon><ResourcesIcon /></ListItemIcon>
          <ListItemText primary={'Select Elective'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/home" className="nav-links" key={'Home'}>
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
            <Link to = "/home" style={{color: 'white', textDecoration: 'none'}}>CollegeGeek</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NotesNavbar;
