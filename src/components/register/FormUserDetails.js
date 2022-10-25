import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';



export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange} = this.props;
    return (
  
      <React.Fragment>
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar >
              user Details
            </AppBar>
            <br/>
            <TextField
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br/>
            <TextField
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br/>
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
             
            />
            <br/>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </Dialog>
       
       </React.Fragment>
    )
  }
}

export default FormUserDetails
