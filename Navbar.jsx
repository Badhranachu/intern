import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
                <AppBar>
            <Toolbar>
                <Typography variant='h6'>MY APP &nbsp;&nbsp;</Typography><br /><br />
                
                <Link to='/Add'><Button variant="contained" color='success'>Add Employee</Button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/v'><Button variant="contained" color='success'>View Employee</Button></Link>&nbsp;&nbsp;&nbsp;
                







            </Toolbar>
        </AppBar>












      
    </div>
  )
}

export default Navbar
