import React from 'react';
import Papers from './papers';
import Notes from './notes-papers';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import NoDataFoundImage from '../images/no_data_found.svg';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  noDataFound: {
    maxWidth: 200,
    maxHeight: 200,
  }
}));

const ScrollableTabsButtonAuto = (props) =>{
  const classes = useStyles();
  const {currentSubject} = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [semester, setSemester] = React.useState('midsem');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleSemChange = event => {
    setSemester(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <AppBar position="static" color="default" style={{boxShadow: 'none', background: 'none'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Papers" {...a11yProps(0)} />
              <Tab label="Notes" {...a11yProps(1)} />
              <Tab label="Books" {...a11yProps(2)} />
              <Tab label="Youtube" {...a11yProps(3)} />
              <Tab label="Projects" {...a11yProps(4)} />
              <Tab label="Assignments" {...a11yProps(5)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <FormControl className={classes.formControl} style={{marginBottom: 20}}>
              <InputLabel id="demo-simple-select-label">Semester type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={semester}
                onChange={handleSemChange}
              >
                <MenuItem value={'midsem'}>Midsem</MenuItem>
                <MenuItem value={'endsem'}>Endsem</MenuItem>
              </Select>
            </FormControl>
            <Papers currentSubject = {currentSubject} semester = {semester} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Notes currentSubject = {currentSubject} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <img src = {NoDataFoundImage} alt = "" className={classes.noDataFound} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <img src = {NoDataFoundImage} alt = "" className={classes.noDataFound} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <img src = {NoDataFoundImage} alt = "" className={classes.noDataFound} />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <img src = {NoDataFoundImage} alt = "" className={classes.noDataFound} />
          </TabPanel>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ScrollableTabsButtonAuto;
