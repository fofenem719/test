import React, { useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Grid, TextField, Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControl from '@material-ui/core/FormControl';

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RequestPage() {
  var classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [errmsg, setErrmsg] = React.useState('');
  const [alerttype, setAlertType] = React.useState('warning');
  const [site, setSite] = React.useState('');
  const [pmemail, setPmemail] = React.useState('');
  const [priority, setPriority] = React.useState('');
  
  const handleChange0 = event => {
    setSite(event.target.value);
  };
  const handleChange = event => {
    setPmemail(event.target.value);
  };
  const handleChange1 = event => {
    setPriority(event.target.value);
  };

  const inputLabel0 = React.useRef(null);
  const [labelWidth0, setLabelWidth0] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth0(inputLabel0.current.offsetWidth);
  }, []);  
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const inputLabel1 = React.useRef(null);
  const [labelWidth1, setLabelWidth1] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth1(inputLabel1.current.offsetWidth);
  }, []);
    
  const [selectedFile, setSelectedFile] = useState(null);
  const uploadHandle = event => {
	console.log(event.target.files);
	console.log(event.target.files[0])
	setSelectedFile(event.target.files)
  };

  const handleCloseAlert = (event, reason) => {
	if (reason === 'clickaway') {
		return;
	  }
    setOpen(false);
  };
  
  const handleSubmit = event => {
	event.preventDefault();
	if (selectedFile == null || selectedFile.length < 1) { 
		console.log('Please upload a file!');
		setErrmsg('Please upload a file!');
		setOpen(true);
	   return false;

    }
    else if (site === ''){
	console.log('Please select site name!');
	setErrmsg('Please select site name!');
	setOpen(true);
	return false;
    }
    else if (pmemail === ''){
	console.log('Please select project manager email!');
	setErrmsg('Please select project manager email!');
	setOpen(true);
	return false;
	}
	else if (priority === ''){
		console.log('Please select priority!');
		setErrmsg('Please select priority!');
		setOpen(true);
		return false;
	}
	const data = new FormData(event.target);
	data.append('file', selectedFile);
	console.log(site);
	console.log(data.get("name"));
	console.log(data.get("email"));
	console.log(pmemail);
	console.log(data.get("file"));	
	console.log(data.get("rsn-req"));
	console.log(priority);
	setErrmsg('Form saved successfully');
	setAlertType('success');
	setOpen(true);
  };

  return (
    <>
      <PageTitle title="Request Form" />
      <Grid container spacing={4}>
          <Widget disableWidgetMenu>
			<form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
			    <Grid container spacing={2}>
				<Grid item xs={12} sm={4}><FormControl variant="outlined" fullWidth className={classes.formControl} required>
				<InputLabel ref={inputLabel0} id="site-ip">Site Name</InputLabel>
				<Select labelId="site-slctlbl" id="site-slct" value={site} onChange={handleChange0} labelWidth={labelWidth0}>
				<MenuItem value={"site1"}>site1</MenuItem>
				<MenuItem value={"site2"}>site2</MenuItem>
				<MenuItem value={"site3"}>site3</MenuItem>
				</Select>
				</FormControl></Grid>
				<Grid item xs={12} sm={4}><TextField required fullWidth id="name" name="name" label="Name" variant="outlined" /></Grid>
				<Grid item xs={12} sm={4}><TextField required fullWidth id="email" name="email" type="email" label="Email Id" variant="outlined" /></Grid>
				<Grid item xs={12} sm={4}><FormControl variant="outlined" fullWidth className={classes.formControl} required>
				<InputLabel ref={inputLabel} id="pmemail-ip">Project Manager Email</InputLabel>
				<Select labelId="pmemail-slctlbl" id="pmemail-slct" value={pmemail} onChange={handleChange} labelWidth={labelWidth}>
				<MenuItem value={"pmemail1@gmail.com"}>pmemail1@gmail.com</MenuItem>
				<MenuItem value={"pmemail2@gmail.com"}>pmemail2@gmail.com</MenuItem>
				<MenuItem value={"pmemail3@gmail.com"}>pmemail3@gmail.com</MenuItem>
				</Select>
				</FormControl></Grid>
				<Grid item xs={12} sm={4}>
				<Button fullWidth id="uploadbtn" name="uploadbtn" variant="outlined" color="secondary" component="label" className={classes.button} startIcon={<CloudUploadIcon />} style={{height:100+'%'}}>
				Upload Material Required
				<input
					type="file"
					name="file"
					style={{ display: "none" }}
					onChange={uploadHandle}
				/>
				</Button>
				</Grid>
				<Grid item xs={12} sm={4}><TextField required fullWidth id="rsn-req" name="rsn-req" label="Reason for Request" variant="outlined" /></Grid>
				<Grid item xs={12} sm={4}><FormControl variant="outlined" fullWidth className={classes.formControl} required>
				<InputLabel ref={inputLabel1} id="priority-ip">Priority</InputLabel>
				<Select	labelId="priority-slctlbl" id="priority-slct" value={priority} onChange={handleChange1} labelWidth={labelWidth1}>
				<MenuItem value={"Low"}>Low</MenuItem>
				<MenuItem value={"Medium"}>Medium</MenuItem>
				<MenuItem value={"High"}>High</MenuItem>
				</Select>
				</FormControl></Grid>
				<Grid item xs={12} sm={4}><Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{height:100+'%'}}>Submit</Button></Grid>
			  </Grid>
			  <Snackbar open={open} autoHideDuration={3500} onClose={handleCloseAlert}>
				  <Alert onClose={handleCloseAlert} severity={alerttype}>{`${errmsg}`}</Alert>
			  </Snackbar>
			</form>  
          </Widget>
      </Grid>
    </>
  );
}
