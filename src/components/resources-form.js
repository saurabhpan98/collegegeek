import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ResourcesForm = (props) => {
  const classes = useStyles();
  const {colleges, defaultCollege, branches, years} = props;

  const [college, setCollege] = React.useState(defaultCollege);
  const [branch, setBranch] = React.useState('');
  const [year, setYear] = React.useState('');
  const [semester, setSemester] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleCollegeChange = event => {
    setCollege(event.target.value);
    props.getCollege({id: 1, collegeName: event.target.value});
  };

  const handleBranchChange = event => {
    setBranch(event.target.value);
  };

  const handleYearChange = event => {
    setYear(event.target.value);
  };

  const handleSemesterChange = event => {
    setSemester(event.target.value)
  };

  //My work starts -------------------------------------

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper style={{padding: 20, marginTop: 50, paddingBottom: 50}}>
          <Typography variant="h4" style={{marginBottom: 30, marginTop: 20}}>
            Search Content
          </Typography>
          <Grid container spacing = {2}>
            <Grid item xs={12} sm={12} lg={6}>
              <FormControl id="college_name_form_control" variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="collegeName-label">
                  College
                </InputLabel>
                <Select
                  labelId="collegeName-label"
                  id="collegeName"
                  value={college}
                  onChange={handleCollegeChange}
                  labelWidth={labelWidth}
                  name = "collegeName"
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  { colleges.map(currentCollege => {
                      return(
                        <MenuItem value={currentCollege.collegeName} key={currentCollege.id}>{currentCollege.collegeName}</MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <FormControl id="branch_form_control" variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="branch-label">
                  Branch
                </InputLabel>
                {
                  (branches.length == 0) ? (
                    <Select
                      labelId="branch-label"
                      id="branch"
                      value={branch}
                      onChange={handleBranchChange}
                      labelWidth={labelWidth}
                      name = "branch"
                      required
                    >
                      <MenuItem value="">
                        <em>Select college first</em>
                      </MenuItem>
                    </Select>
                  ) : (
                    <Select
                      labelId="branch-label"
                      id="branch"
                      value={branch}
                      onChange={handleBranchChange}
                      labelWidth={labelWidth}
                      name = "branch"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        branches.map(branch =>{
                          return(
                            <MenuItem value={branch} key={branch}>{branch}</MenuItem>
                          )
                        })
                      }
                    </Select>
                  )
                }
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <FormControl id="year_form_control" variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="year-label">
                  Year
                </InputLabel>
                {
                  (years.length == 0) ? (
                    <Select
                      labelId="year-label"
                      id="year"
                      value={year}
                      onChange={handleYearChange}
                      labelWidth={labelWidth}
                      name = "year"
                      required
                    >
                      <MenuItem value="">
                        <em>Select college first</em>
                      </MenuItem>
                    </Select>
                  ) : (
                    <Select
                      labelId="year-label"
                      id="year"
                      value={year}
                      onChange={handleYearChange}
                      labelWidth={labelWidth}
                      name = "year"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      { years.map(year =>{
                          return(
                            <MenuItem value={year}>{year} Year</MenuItem>
                          )
                        })
                      }
                    </Select>
                  )
                }
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <FormControl id="semester_form_control" variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="semester-label">
                  Semester
                </InputLabel>
                {
                  (year == '') ? (
                    <Select
                      value = {semester}
                      labelId="semester-label"
                      id="semester"
                      labelWidth={labelWidth}
                      name = "semester"
                      onChange = {handleSemesterChange}
                      required
                    >
                      <MenuItem value="">
                        <em>Select year first</em>
                      </MenuItem>
                    </Select>
                  ) : (
                    <Select
                      value = {semester}
                      labelId="semester-label"
                      id="semester"
                      labelWidth={labelWidth}
                      name = "semester"
                      onChange = {handleSemesterChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value = {2*year-1}>{2*year-1} Sem</MenuItem>
                      <MenuItem value = {2*year}>{2*year} Sem</MenuItem>
                    </Select>
                  )
                }
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" size="large" variant="contained" color="primary" style={{marginTop: 20}}>
            Find content
          </Button>
        </Paper>

      </Container>
    </React.Fragment>
  );
}

export default ResourcesForm;
